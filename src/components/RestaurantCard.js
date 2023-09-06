import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;
    const {loggedInUser} = useContext(UserContext)
    // console.log(resData);
    return (
        <div className=' m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200'>
            <img className=' rounded-lg'
                alt='res-logo' src={CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold py-2 text-lg">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>
            <h4>{loggedInUser} </h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; //default export