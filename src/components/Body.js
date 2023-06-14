import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
     let [listOfRestaurant,setListOfRestaurant] = useState(resList
        //[
    //     {
    //         "type": "restaurant",
    //         "data": {
    //             "id": "65797",
    //             "name": "Leon's - Burgers & Wings (Leon Grill)",
    //             "deliveryTime": 20,
    //             "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
    //             "cuisines": ["American", "Snacks", "Turkish", "Portuguese", "Continental"
    //             ],
    //             "costForTwo": 30000,
    //             "avgRating": "3.8",
    //         }
    //     },
    //     {
    //                 "type": "restaurant",
    //                 "data": {
    //                     "id": "65799",
    //                     "name": "MCD",
    //                     "deliveryTime": 20,
    //                     "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
    //                     "cuisines": ["American", "Snacks", "Turkish", "Portuguese", "Continental"
    //                     ],
    //                     "costForTwo": 30000,
    //                     "avgRating": "4.8",
    //                 },
        
    //             },
    //             {
    //                 "type": "restaurant",
    //                 "data": {
    //                     "id": "65798",
    //                     "name": "Dominos",
    //                     "deliveryTime": 20,
    //                     "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
    //                     "cuisines": [
    //                         "American",
    //                         "Snacks",
    //                         "Turkish"
    //                     ],
    //                     "costForTwo": 30000,
    //                     "avgRating": "4.3",
    //                 },
        
    //             }
        
    // ]
    )

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) =>
                            res.data.avgRating > 4
                        )
                        setListOfRestaurant(filteredList)
                        console.log(listOfRestaurant)
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurant.map((restaurant) => (

                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body