import React from 'react'
import { useState } from 'react'
import logo from '../assets/LOGO MOBILE 40.png'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
      <nav className="navigation">
        <a href="/" className="logo"><img src={logo} alt="Jayden's Jungle Logo" className="logo" /></a>
        <button className="hamburger-menu-button" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
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
        <div
          className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Firefighting">FireFighting</a>
            </li>
            <li>
              <a href="#EMS">EMS</a>
            </li>
            <li>
              <a href="#Speaking">Speaking</a>
            </li>
            <li>
              <a href="#Gaming">Gaming</a>
            </li>
            <li>
              <a href="#Cars">Cars</a>
            </li>
            <li>
              <a href="#Vlogs">Vlogs</a>
            </li>
            <li>
              <a href="#Merch">Merch</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar