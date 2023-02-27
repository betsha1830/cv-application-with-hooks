import React, { useState } from 'react';
import './App.css';
import EducationInfo from './Components/EducationInfo';
import Output from './Components/Output';
import PersonalInfo from './Components/PersonalInfo';
import WorkInfo from './Components/WorkInfo';

function App() {

  const label = {
    personal_info_label:{full_name: "Full Name", phone_number: "Phone Number", email: "Email", address: "Address"},
    education_info_label:{school_name: "School Name", education_title: "Education Title", education_beginning_date: "Beginning Date", education_end_date: "Ending Date"},
    work_info_label: {position_title: "Position Title", work_description: "Work Description", work_beginning_date: "Beginning Date", work_end_date: "Ending Date"}}
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([])
  const [workInfo, setWorkInfo] = useState([])
  const [editEducationPos, setEditEducationPos] = useState(-10)
  const [editWorkPos, setEditWorkPos] = useState(-10)

  const addPesronalInfo = (data) => { 
    setPersonalInfo({...data})
  }

  const addEducationInfo = (data) => {
    if(editEducationPos !== -10){
      setEducationInfo(educationInfo.map((obj,index) => {
        if(index === editEducationPos){
          return data
        }
        return obj
      }))
      document.getElementById('add-education').innerText = 'Add'
      setEditEducationPos(-10)
    }
    else setEducationInfo(educationInfo.concat(data))
  }

  const addWorkInfo = (data) => {
    if(editWorkPos !== -10){
      setWorkInfo(workInfo.map((obj,index) => {
        if(index === editWorkPos){
          return data
        }
        return obj
      }))
      document.getElementById('add-work').innerText = 'Add'
      setEditWorkPos(-10)
    }
    else setWorkInfo(workInfo.concat(data))
  }

  function populateField(infoType, index) {
    Object.keys(infoType[index]).forEach(val => {
      document.getElementById(val).value = infoType[index][val]
    })
  }

  const editEducationInfo = (index) => {
    setEditEducationPos(index)
    populateField(educationInfo, index)
    document.getElementById('add-education').innerText = 'Done'
  }

  const editWorkInfo = (index) => {
    setEditWorkPos(index)
    populateField(workInfo, index)
    document.getElementById('add-work').innerText = 'Done'
  }

  const deleteEducationInfo = (index) => {
    setEducationInfo(educationInfo.filter((info, pos) => {
      if (pos !== index){
        return info
      }
      return null
    }))
  }

  const deleteWorkInfo = (index) => {
    setWorkInfo(workInfo.filter((info, pos) => {
      if (pos !== index){
        return info
      }
      return null
    }))
  }

  return (
    <div className="App">
      <PersonalInfo personalLabel={label.personal_info_label} personalValue={personalInfo} passSetPersonalInfo={setPersonalInfo} personalHandler={addPesronalInfo}/>
      <EducationInfo educationLabel={label.education_info_label} educationValue={educationInfo} educationHandler={addEducationInfo} pos={editEducationPos}/>
      <WorkInfo workLabel={label.work_info_label} workValue={workInfo} workHandler={addWorkInfo} pos={editWorkPos}/>

      <Output type='personal-info' value={personalInfo} label={label.personal_info_label} />
      <Output type='education-info' value={educationInfo} editHandler={editEducationInfo} deleteHandler={deleteEducationInfo} label={label.education_info_label} />
      <Output type='work-info' value={workInfo} editHandler={editWorkInfo} deleteHandler={deleteWorkInfo} label={label.work_info_label} />
    </div>
  );
}

export default App;
