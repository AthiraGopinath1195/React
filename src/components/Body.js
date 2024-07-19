import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
    const [restaurantList,setRestaurantList]=useState([]);
    const [searchText,setSearchText]=useState('');
    const [filteredRestaurant,setFilteredRetaurant]=useState([])
    const onlineStatus = useOnlineStatus();

    const fetchRestData = async()=>{
        const data = await fetch(SWIGGY_URL)
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRetaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        fetchRestData()
    },[])

    if(onlineStatus===false)
    return <h1>
        Looks like you are offline!Please check your internet connection.
    </h1>;

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
            <div className="res-container" >
               {filteredRestaurant.map((element)=>
                <Link key={element?.info?.id}  to={"/restaurants/"+element?.info.id}>
                    <RestaurantCard resCard={element}/>
                </Link>
               )}
            </div>
        </div>
    )
}

export default Body;