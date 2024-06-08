import React from "react";
import ReactDOM from "react-dom/client"
import Restaurant from "./DefaultData"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) =>{
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla}=props.resCard.info
    return(
        <div className="res-card">
            <img 
                className="res-logo" 
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {Restaurant.map((element)=>
                    <RestaurantCard key={element?.info?.id}resCard={element}/>
               )}
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)