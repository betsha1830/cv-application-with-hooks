import React from "react";

function Output (props) {

  if(props.type !== 'personal-info'){
    return(
      <div className={props.type + '-output'}>
        {props.value.map((obj) => {
          return(
          Object.keys(obj).map(item => {
            return(
              <div>
                <label>{props.label[item]}: </label> <span>{obj[item]}</span>
              </div>
            )
          })
        )})}
      </div>
    )
  }

  return(
    <div className={props.type +  '-output'}>
      {Object.keys(props.value).map(item => {
        return(
        <div> 
          <label>{props.label[item]}: </label> <span>{props.value[item]}</span>
        </div>
        )
      })}
    </div>
  )

}

export default Output