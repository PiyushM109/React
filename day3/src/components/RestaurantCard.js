import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  let { name, cloudinaryImageId, cuisines, avgRating, costForTwo, aggregatedDiscountInfoV3 } =
    props.restaurant.info;
  return (
    <div className="m-4 p-4 w-[300px] h-[400px] bg-slate-100 rounded-md shadow-md hover:bg-slate-200">
      <img
        className="rounded-lg h-[50%] w-[100%] shadow-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="absolute mt-[-32] px-2 w-[268px] bg-gray-400 bg-opacity-40 font-bold uppercase text-white text-2xl font-mono rounded-b-lg">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h1>      
      <h3 className="font-bold mt-1">{name}</h3>
      <h5 className="font-medium mt-1">{cuisines.join(", ")}</h5>
      <h5 className="mt-1">Rating : {avgRating}⭐</h5>
      <h5 className="font-bold mt-1">{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
