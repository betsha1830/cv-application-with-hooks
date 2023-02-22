import { clear } from "@testing-library/user-event/dist/clear";
import React, {useState} from "react";

function WorkInfo (props) {

  const [workInfo, setWorkInfo] = useState({})

  function clearField () {
    Object.keys(props.workLabel).forEach(id => {
      document.getElementById(id).value = ''
      setWorkInfo({})
    })
  }

  const updateWorkField = (e) => {
    setWorkInfo({...workInfo, [e.target.id]: e.target.value})
  }

  const addWork = () => {
    props.workHandler(workInfo)
    clearField()
  }

  return(
    <div className="work-info">
      {Object.keys(props.workLabel).map(label => {
        return(
        <div>
          <label>{props.workLabel[label]}: </label> <input onChange={updateWorkField} id={label} type={(props.workLabel[label]).includes('Date') ? 'date' : 'text'}></input>
        </div>
        )
      })}
      <button onClick={addWork} className="add-work">Add</button>
    </div>
  )

}

export default WorkInfo