import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =() =>{
    const [resInfo,setResInfo]=useState(null)
    const [resMenuInfo,setResMenuInfo]=useState(null)
    const {resId}=useParams()


    useEffect(()=>{
        const resData = useRestaurantMenu(resId);
        setResInfo(resData?.cards[2]?.card?.card?.info)
        setResMenuInfo(resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards)
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