import React, {useState} from 'react';
import './index.css'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import {Link} from 'react-router-dom'

function Sidenav() {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(!isActive)
    }
  return( 
    <>
    <nav className="topnav">
        <FaBars className="mobilebars" onClick={()=>{toggleMenu()}}/>

    </nav>
    <nav className={isActive ? "sidenav active" : "sidenav"}>
        <div className={isActive ? "closemenu-wrapper closemenu-active" : "closemenu-wrapper"}>
                <ImCross className="mobileclose" onClick={()=>{toggleMenu()}}/>
            </div>
        <div className="sidenav-wrapper">
            <div className="nav-profile">
                <div className="profile-wrapper">
                    <div className="profile-circle">

                    </div>
                    <h1>Karl</h1>
                </div>
            </div>
            <ul className="nav-list">
                <Link to="/user/"><li className="list-item">Dashboard</li></Link>
                <Link to="/user/new-log"><li className="list-item">New Log</li></Link>
                <Link to="/user/history"><li className="list-item">History</li></Link>
            </ul>
        </div> 
    </nav>
    </>
    );
}

export default Sidenav;
