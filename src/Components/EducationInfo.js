import React, {useState} from 'react'
import EditIcon from "../edit.png"
import DeleteIcon from "../trash.png"

function EducationInfo(props) {

  const [educationInfo, setEducationInfo] = useState({})

  function clearField() {
    Object.keys(props.educationLabel).forEach(id => {
      document.getElementById(id).value = ''
      setEducationInfo({})
    })
  }

  function populateField() {
    Object.keys(props.educationLabel).forEach(id => {
      document.getElementById(id).value = props.educationValue[id]
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
      {/* <div><h1 className='heading'>Education Information <i><img alt={'edit-button'} src={EditIcon}></img></i> <i><img alt={'delete-button'} src={DeleteIcon}></img></i></h1> </div> */}
      {Object.keys(props.educationLabel).map(label => {
        return(
          <div>
            <label>{props.educationLabel[label]}: </label> <input onChange={updateEducationInfo} type={(props.educationLabel[label]).includes('Date') ? 'date': 'text'} id={label}></input>
          </div>
        )
      })}
      <button id='add_education' onClick={passEducationInfo}>Add</button>
      {/* <h1>{JSON.stringify(educationInfo)}</h1> */}
    </div>
  )
}

export default EducationInfo