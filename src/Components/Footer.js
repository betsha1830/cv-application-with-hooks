import React from "react";
import Github from '../github.png'
import LinkedIn from '../linkedin.png'

function Footer (props) {

  const year = new Date(Date.now()) 

  return(
    <div className="footer">
      <div className="left-side">
        <a href="https://www.linkedin.com/in/betsue-weldemariam-b05989151/" target="_blank"><img  alt="linkedin" src={LinkedIn}></img></a>
        <a href="https://github.com/betsha1830/" target="_blank"><img alt="github" src={Github}></img></a>
      </div>
      <div className="right-side">
        Copyright {year.getFullYear()}
      </div>
    </div>
  )
}

export default Footer