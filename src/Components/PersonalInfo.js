import React, {useState} from "react";

function PersonalInfo (props) {

  const [personal, setPersonal] = useState({...props.personalLabel})

  function disableField (value=false) {
    Object.keys(props.personalLabel).forEach(item => {
      document.getElementById(item).disabled = value
    })
  }

  const passPersonalInfo = () => {
    if(document.getElementById('add-personal-info').innerText === 'Submit') {
      props.personalHandler(personal)
      document.getElementById('add-personal-info').innerText = 'Edit'
      disableField(true)
    }
    else if(document.getElementById('add-personal-info').innerText === 'Edit') {
      document.getElementById('add-personal-info').innerText = 'Done'
      disableField(false)
    }
    else {
      props.personalHandler(personal)
      document.getElementById('add-personal-info').innerText = 'Edit'
     disableField(true)
    }
    
  }
  
  const updatePersonalInfo = (e) => {
    setPersonal({...personal, [e.target.id]: e.target.value})
  }

  return(
    <div className="personal-info">
      <h2>Personal Field</h2>
      {Object.keys(props.personalLabel).map(key => {
        return(
          <div className="label-field">
            <label className='label'>{props.personalLabel[key]}:</label><br></br><input onChange={updatePersonalInfo} type={'text'} id={key}></input>
          </div>
        )
      })}
      <button id="add-personal-info" onClick={passPersonalInfo}>Submit</button>
    </div>
  )
}

export default PersonalInfo