import { useEffect, useState } from "react";

const useRestaurantMenu=((resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch(REST_MENU_URL+resId);
        const json = await data.json()
        setResInfo(json?.data)
    }
    return resInfo;
});

export default useRestaurantMenu;