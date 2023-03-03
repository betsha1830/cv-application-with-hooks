import React from "react";
import EditButton from '../edit.png'
import DeleteButton from '../trash.png'

function Output (props) {

  const deleteInfo = (index) => {
    props.deleteHandler(index)
  }

  const editInfo = (index) => {
    props.editHandler(index)
  }

  if(props.type !== 'personal-info'){
    return(
      <div className={props.type + '-output'}>
        <div>
        {props.value.map((obj, index) => {
          return(
            <div> 
              <h2>{props.type.includes('work') ? 'Work Information '+ parseInt(index+1) : 'Education Information ' + parseInt(index+1)}
              <img alt={'Edit button'} src={EditButton} onClick={() => editInfo(index)}></img>
              <img alt={'Delete button'} src={DeleteButton} onClick={() => deleteInfo(index)}></img></h2> 
              {Object.keys(obj).map(item => {
                return(
                  <div>
                    <label>{props.label[item]}: </label> <span>{obj[item]}</span>
                  </div>
                  )
                })
              }
            </div>
        )})}
        </div>
      </div>
    )
  }

  return(
    <div className={props.type +  '-output'}>
      <h2>Personal Information</h2>
      {Object.keys(props.label).map(item => {
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