import React, {useState} from 'react';
import './index.css'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function Sidenav() {

    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(!isActive)
    }
  return( 
    <>
    <nav className="topnav">
        <FaBars className="mobilebars" onClick={()=>{toggleMenu()}}/>
        <div className={isActive ? "mobilenav active" : "mobilenav"}>
            <div className="closemenu-wrapper">
                <ImCross className="mobileclose" onClick={()=>{toggleMenu()}}/>
            </div>
            <ul className="nav-list">
                    <li className="list-item">Dashboard</li>
                    <li className="list-item">New Log</li>
                    <li className="list-item">History</li>
            </ul>
        </div>
    </nav>
    <nav className="sidenav">
        <div className="sidenav-wrapper">
            <ul className="nav-list">
                <li className="list-item">Dashboard</li>
                <li className="list-item">New Log</li>
                <li className="list-item">History</li>
            </ul>
        </div> 
    </nav>
    </>
    );
}

export default Sidenav;
