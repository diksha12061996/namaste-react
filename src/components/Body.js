import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING ")
        const json = await data.json();
        console.log(json)
        setListOfRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1>Looks like you're offline? Please check your internet connection.</h1>
    );

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" className=" border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center"> 
                 <button className="px-4 bg-gray-100"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) =>
                            res.data.avgRating > 4
                        )
                        setListOfRestaurant(filteredList)

                    }}
                >Top Rated Restaurant</button></div>

            </div>
            <div className='res-container flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant?.info} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body