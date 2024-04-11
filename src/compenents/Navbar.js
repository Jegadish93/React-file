import React from 'react'
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className='header_topbg'>
        <header>
            <div className='container'>
                <div className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="?a=home"> <img src="images/logo.png" alt="" className="img-fluid logo hvr-wobble-vertical" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span> <i className="bi bi-list"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link hvr-underline-from-center"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link hvr-underline-from-center"> About Us </Link>
                                </li>  
                                <li className="nav-item">
                                    <Link to="/Faq" className="nav-link hvr-underline-from-center"> Faq </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/Rules" className="nav-link hvr-underline-from-center"> Rules </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link hvr-underline-from-center"> Contact</Link>
                                </li> 
                                <li className="nav-item nav_but">
                                    <a className="nav-link but hvr-bounce-to-right" href="?a=signup"> <img src="images/user_img.png" alt="user_img" className="img1" /> login </a>
                                </li> 
                            </ul>
                        </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
