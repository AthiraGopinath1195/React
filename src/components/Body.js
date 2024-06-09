import RestaurantCard from "./RestaurantCard";
import Restaurant from "../utils/DefaultData";
import { useState } from "react";

const Body = () =>{
    const [restaurantList,setRestaurantList]=useState(Restaurant);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    filteredList = restaurantList.filter(res=>res.info.avgRating>4)
                    setRestaurantList(filteredList)

                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
               {restaurantList.map((element)=>
                    <RestaurantCard key={element?.info?.id}resCard={element}/>
               )}
            </div>
        </div>
    )
}

export default Body;