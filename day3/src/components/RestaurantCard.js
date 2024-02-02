import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  let { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    props.restaurant.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}⭐</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
