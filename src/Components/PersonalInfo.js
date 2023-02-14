import React, {useState} from "react";

function PersonalInfo (props) {
  
  return(
    <div className="personal-info">
      {Object.keys(props.personalLabel).map(key => {
        return(
          <div>
            <label>{props.personalLabel[key]}:</label><div> </div>
          </div>
        )
      })}
    </div>
  )
}

export default PersonalInfo