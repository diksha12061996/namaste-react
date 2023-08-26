import { CDN_URL } from "../utils/constants";

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
      console.log(resData);
      console.log(cuisines);
    return (
        <div className=' m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200'>
            <img className=' rounded-lg'
                alt='res-logo' src={CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold py-2 text-lg">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard; //default export