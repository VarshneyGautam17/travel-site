import React from 'react';
import "../Style/Header.css";
import mainlogo from "../Image/mainlogo.png";

function Header() {
  return (
    <div className='header_conainer'>
        <nav className="navbar navbarclass navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={mainlogo} alt="logo not load" style={{width:"4rem",height:"4rem"}} />
        <h3 style={{display:"inline-block"}}>

       <span className='ml-4' style={{fontWeight:"700",color:"navy"}}>
        <i>
        GET<span style={{color:"rgb(21, 212, 237)"}}>
              YOUR
            </span>
                TRIP
        </i>
        </span>
        </h3>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ulclass w-100 ">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          HOME <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          PACKAGES 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          CARS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          HOTELS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          FLIGHTS
        </a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">
          TRAINS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          CONTACT
        </a>
      </li>
      
    </ul>
    
  </div>
</nav>

    </div>
  )
}

export default Header