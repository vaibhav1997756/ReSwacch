import React from 'react'
import {Link} from 'react-router-dom';

import { useState } from "react"

import "./Navbar.css";


const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
return (

  // <div>Navbar</div>
  <nav className="navigation" id='position'>
    <a href="/" className="brand-name">
     Swachh Bharat
    </a>
    <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}>
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <Link to="/" className='nav-link' title=''>Home</Link>
        </li>
         <li>
          <Link to="/concern" className='nav-link' title='qwerty'>Concern</Link>
        </li> 
        <li>
          <Link to="/contactus" className='nav-link'>ContactUs</Link>
        </li>
        <li>
          <Link to="/initiative" className='nav-link'>Initiative</Link>
        </li>
        <li>
          <Link to="/collaboration" className='nav-link'>Collaboration</Link>
        </li>
        <li>
          <Link to="/canvas" className='nav-link'>Canvas</Link>
        </li>
        <li>
          <Link to="/hooks" className='nav-link'>Hooks</Link>
        </li>
      
      </ul>
    </div>
  </nav>
)
}

export default Nav