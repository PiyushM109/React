import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mock_data";
import { useState, useEffect } from "react";
const Body = () => {
  const [resList,setResList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()

    console.log(json);
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
             setResList(resList.filter(res => res.info.avgRating>="4.5"))
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
