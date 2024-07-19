import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnName,setBtnName]=useState('LOGIN');
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link className="nav-link">
                        <li>
                            Online Status:{onlineStatus?"Online":"Offline"}
                        </li>
                    </Link>
                    <Link className="nav-link" to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link className="nav-link" to={'/about'}>
                        <li>About Us</li>
                    </Link>
                    <Link className="nav-link" to={'/contact'}>
                        <li>Contact Us</li>
                    </Link>
                    <Link className="nav-link" to={'/'}>
                        <li>Cart</li>
                    </Link>
                    <Link className="nav-link" to={'/grocery'}>
                        <li>InstaGroceryMart</li>
                    </Link>
                    <button className="btn" onClick={()=>{
                        btnName=='LOGIN'?setBtnName('LOGOUT'):setBtnName('LOGIN')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;