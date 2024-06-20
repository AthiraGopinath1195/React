import { useEffect, useState } from "react";
import { REST_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu =() =>{
    const [resInfo,setResInfo]=useState(null)
    const [resMenuInfo,setResMenuInfo]=useState(null)
    const {resId}=useParams()

    const fetchRestaurantMenu = async (resId)=>{
        const data = await fetch(REST_MENU_URL+resId);
        const json = await data.json()
        setResInfo(json?.data?.cards[2]?.card?.card?.info)
        setResMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards)
    };

    useEffect(()=>{
        fetchRestaurantMenu(resId)
    },[])

    return (resInfo===null)? <Shimmer/>:(
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h3>{resInfo?.cuisines.join(", ")}</h3>
            <h3>{resInfo?.costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
           {
                resMenuInfo?.map((ele)=>{
                        return (
                            <li key={"ele"+ele.card.info.id}>
                                {ele.card?.info?.name} - Rs.{ele.card?.info?.price/100} /-
                            </li>
                        )
                })
            } 
            </ul>
        </div>
    )
};

export default RestaurantMenu;