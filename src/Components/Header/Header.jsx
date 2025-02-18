import React from 'react'
import byte_logo from '../images/byte-logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light mainNavbar">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
          <img src={byte_logo} className='byte_logo' alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsiv" aria-controls="navbarResponsiv" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsiv">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/byte">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contest">Contest</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/leaderboard">LeaderBoard</Link>
            </li>
          </ul>
          <Link class="btn loginButton" to="/login" type="submit">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
