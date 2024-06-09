import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () =>{
    const [restaurantList,setRestaurantList]=useState([]);
    const [searchText,setSearchText]=useState('');
    const [filteredRestaurant,setFilteredRetaurant]=useState([])

    const fetchRestData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRetaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        fetchRestData()
    },[])

    if(restaurantList?.length===0){
        return <Shimmer/>
    }
  

    return restaurantList?.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(value)=>{
                        setSearchText(value.target.value);
                    }}/>
                    <button onClick={()=>{
                        let data=restaurantList.filter((res)=>
                           res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRetaurant(data)
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    filteredList = restaurantList.filter(res=>res.info.avgRating>4)
                    setFilteredRetaurant(filteredList)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
               {filteredRestaurant.map((element)=>
                    <RestaurantCard key={element?.info?.id} resCard={element}/>
               )}
            </div>
        </div>
    )
}

export default Body;