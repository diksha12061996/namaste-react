import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])   
     const [searchText,setSearchText]=useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING ")
        const json = await data.json();
        console.log(json)
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

    }

    // if(listOfRestaurant.length===0){
    //     return <Shimmer />
    // }
    return listOfRestaurant.length === 0 ? <Shimmer /> :
     (
        <div className='body'>
            <div className='filter'>
            <div className="search">
                <input type="text" className="search-btn" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                  const filteredRestaurant =  listOfRestaurant.filter((res)=>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) =>
                            res.data.avgRating > 4
                        )
                        setListOfRestaurant(filteredList)
                        
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (

                        <Link key={restaurant.data.id} to={"/restaurant/"+restaurant.data.id}><RestaurantCard  resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body