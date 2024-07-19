import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =() =>{
    const {resId}=useParams()
    const resData = useRestaurantMenu(resId);

    if(resData ===null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resData?.cards[2]?.card?.card?.info;
    const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
 
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
           {
                itemCards?.map((ele)=>{
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