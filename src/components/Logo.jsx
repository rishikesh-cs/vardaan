import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <>
   
     
          <div className="mr-auto ">
            {/* <a className="logo-link magnetic" href="index.html"> */}
            <Link className="logo-link magnetic" id='logo' to='/'>
              <img
                className="logotype"
                src="./img/logonew1.png"
                alt="vardaan interior design"
              />
            </Link>
             <Link className="logo-link magnetic" id='logom' to='/'>
              <img
                className="logotype"
                src="./img/logonewm4.png"
                alt="vardaan interior design"
              />
            </Link>
            {/* </a> */}
          </div>
        
    </>
  )
}
