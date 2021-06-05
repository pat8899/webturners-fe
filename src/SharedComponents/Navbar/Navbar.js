import React from 'react'
import "./Navbar.css"
import turnerslogo from "/Users/peeh.indy/Desktop/Dev_L5/Mission/M4_React_webpage/turners-frontend/src/Assets/img/turners_trans.png"

function Navbar() {
    return (
        <div>
            <div className="navbar_container"></div>
            <div className="navbar_subcon"></div>
            <div className="navbar_subcon_l">
                 <img src={turnerslogo} alt="turnerslogo" />
            </div>
           
        </div>
    );
};

export default Navbar
