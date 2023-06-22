import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    //console.log()
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        console.log(MENU_API+resId)
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER");
       const data = await fetch(MENU_API+resId)
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData.data);
    };
    if (resInfo === null) return <Shimmer />
    // const name = resInfo?.cards[0]?.card?.card?.info?.name;
    // const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
    // const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul >
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} -{"Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                ))}

            </ul>
        </div>

    );
}

export default RestaurantMenu;