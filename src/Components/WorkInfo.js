import React, {useEffect, useState} from "react";

function WorkInfo (props) {

  const [workInfo, setWorkInfo] = useState({})

  function clearField () {
    Object.keys(props.workLabel).forEach(id => {
      document.getElementById(id).value = ''
      setWorkInfo({})
    })
  }

  useEffect(() => {
    if(props.pos !== null){
      setWorkInfo(props.workValue[props.pos])
    }
  }, [props.pos])

  const updateWorkField = (e) => {
    setWorkInfo({...workInfo,
      [e.target.id]: e.target.value
    })
  }

  const passWork = () => {
    props.workHandler(workInfo)
    clearField()
  }

  return(
    <div className="work-info">
      {Object.keys(props.workLabel).map(label => {
        return(
        <div>
          <label>{props.workLabel[label]}: </label> <br></br><input onChange={updateWorkField} id={label} type={(props.workLabel[label]).includes('Date') ? 'date' : 'text'}></input>
        </div>
        )
      })}
      <button onClick={passWork} id="add-work">Add</button>
    </div>
  )

}

export default WorkInfo