import React, {useEffect, useState} from 'react'

function EducationInfo(props) {

  const [educationInfo, setEducationInfo] = useState({})

  useEffect(() => {
    if(props.pos !== -10){
      setEducationInfo(props.educationValue[props.pos])
    }
  }, [props.pos])

  function clearField() {
    Object.keys(props.educationLabel).forEach(id => {
      document.getElementById(id).value = ''
      setEducationInfo({})
    })
  }

  const passEducationInfo = () => {
    props.educationHandler(educationInfo)
    clearField()
  }

  const updateEducationInfo = (e) => {
    setEducationInfo({ ...educationInfo,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className='education-info'>
      {Object.keys(props.educationLabel).map(label => {
        return(
          <div>
            <label>{props.educationLabel[label]}: </label> <input onChange={updateEducationInfo} type={(props.educationLabel[label]).includes('Date') ? 'date': 'text'} id={label}></input>
          </div>
        )
      })}
      <button id='add-education' onClick={passEducationInfo}>Add</button>
      {/* <h1>{JSON.stringify(educationInfo)}</h1> */}
    </div>
  )
}

export default EducationInfo