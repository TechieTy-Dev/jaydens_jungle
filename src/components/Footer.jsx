import React from 'react'
import logo from '../assets/LOGO 75.svg'

const Footer = () => {
  return (
    <section className="footer">
        <img src={logo} alt="logo" className="footer-logo" />
      <nav >
        <ul className='footer-nav'>
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
      </nav>
    </section>
  )
}

export default Footer