import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './Components/PersonalInfo';

function App() {

  const [label, setLabel] = useState({personal_info_label:{full_name: "Full Name", phone_number: "Phone Number", email: "Email", address: "Address"},
                                      education_info_label:{school_name: "School Name", education_title: "Education Title", education_beginning_date: "Beginning date",
                                      education_end_date: "Ending Date"},
                                      work_info_label: {position_title: "Position Title", work_description: "Work Description", work_beginning_date: "Beginning date",
                                      work_end_date: "Ending Date"}})
  const [personalInfo, setPersonalInfo] = useState({})
  const [workInfo, setWorkInfo] = useState({})

  return (
    <div className="App">
      <PersonalInfo />
    </div>
  );
}

export default App;
