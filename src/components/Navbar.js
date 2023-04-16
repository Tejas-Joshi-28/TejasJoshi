import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>

      {/* Navbar Started */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-2`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${props.activeStatus} ${props.linkColor_1}`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.linkColor_2}`} aria-current="page" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className={`dropdown-menu dropdown-menu-${props.dropColor}`}>
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="Tejas">{props.text}</label>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar Ended */}

    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,   
  // <----- Indicating that title must have string as input if deaultProps is not set
  aboutText: PropTypes.string.isRequired
  // <----- Indicating that aboutText must have string as input if deaultProps is not set
}

Navbar.defaultProps = {
  title: 'Japan',               // <----- Indicating that title must have string as input
  aboutText: 'About'    // <----- Indicating that aboutText must have string as input
}

