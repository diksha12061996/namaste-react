import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const { setUserName,loggedInUser } = useContext(UserContext);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log("17", json)
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
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 bg-gray-100"
                        onClick={() => {
                            const filteredList = listOfRestaurant.filter((res) =>
                                res.info.avgRating > 4
                            )
                            setListOfRestaurant(filteredList)
                        }}
                    >Top Rated Restaurant</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>User:</label>
                    <input className=" border border-black p-2" value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)}></input>
                </div>

            </div>
            <div className='res-container flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
                            {restaurant?.info?.avgRating > 4 ? (<RestaurantCardPromoted resData={restaurant?.info} />) : (<RestaurantCard resData={restaurant?.info} />)}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body