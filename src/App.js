import React, { useState } from 'react';
import './App.css';
import EducationInfo from './Components/EducationInfo';
import Output from './Components/Output';
import PersonalInfo from './Components/PersonalInfo';
import WorkInfo from './Components/WorkInfo';

function App() {

  const [label, setLabel] = useState({personal_info_label:{full_name: "Full Name", phone_number: "Phone Number", email: "Email", address: "Address"},
                                      education_info_label:{school_name: "School Name", education_title: "Education Title", education_beginning_date: "Beginning Date",
                                      education_end_date: "Ending Date"},
                                      work_info_label: {position_title: "Position Title", work_description: "Work Description", work_beginning_date: "Beginning Date",
                                      work_end_date: "Ending Date"}})
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([])
  const [workInfo, setWorkInfo] = useState([])

  const addPesronalInfo = (data) => { 
    setPersonalInfo({...data})
  }

  const addEducationInfo = (data) => {
    setEducationInfo(educationInfo.concat(data))
  }

  const addWorkInfo = (data) => {
    setWorkInfo(workInfo.concat(data))
  }

  const editEducationInfo = (data) => {
    let pos = 0
    setEducationInfo({
      [educationInfo[pos]]: data
    })
  }

  return (
    <div className="App">
      <PersonalInfo personalLabel={label.personal_info_label} 
      personalValue={personalInfo} 
      passSetPersonalInfo={setPersonalInfo} 
      personalHandler={addPesronalInfo}/>
      <EducationInfo educationLabel={label.education_info_label} educationValue={educationInfo} educationHandler={addEducationInfo}/>
      <WorkInfo workLabel={label.work_info_label} workValue={workInfo} workHandler={addWorkInfo}/>

      <Output type='personal-info' value={personalInfo} label={label.personal_info_label} />
      <Output type='education-info' value={educationInfo} label={label.education_info_label} />
      <h1>{JSON.stringify(educationInfo)}</h1> 
      {/* <h1>{JSON.stringify(personalInfo)}</h1>
      <h1>{JSON.stringify(workInfo)}</h1> */}
    </div>
  );
}

export default App;
