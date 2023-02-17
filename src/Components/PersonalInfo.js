import React, {useState} from "react";

function PersonalInfo (props) {

  const [personal, setPersonal] = useState({...props.personalLabel})

  const passPersonalInfo = () => {
    props.personalHandler(personal)
  }
  
  const updatePersonalInfo = (e) => {
    setPersonal({...personal, [e.target.id]: e.target.value})
    console.log(personal)
  }

  return(
    <div className="personal-info">
      {Object.keys(props.personalLabel).map(key => {
        return(
          <div>
            <label>{props.personalLabel[key]}:</label><input onChange={updatePersonalInfo} type={'text'} id={key}></input>
          </div>
        )
      })}
      <button className="add-personal-info" onClick={passPersonalInfo}>Submit</button>
    </div>
  )
}

export default PersonalInfo