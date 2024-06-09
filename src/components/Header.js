import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    const [btnName,setBtnName]=useState('LOGIN')
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>{
                        btnName=='LOGIN'?setBtnName('LOGOUT'):setBtnName('LOGIN')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;