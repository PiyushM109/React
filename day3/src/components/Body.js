import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false){
    return <h1>Looks like you are offline check your internet connection</h1>
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between items-center h-20 m-3">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border  border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input> 
          <button className="px-4 py-1 bg-green-100 m-2 rounded-md"
            onClick={() => {
              const filtered = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filtered);
            }}
            
          >
            search
          </button>
        </div>
       <div>
       <button
          className="m-4 px-4 py-1 h-8 bg-green-100 rounded-md"
          onClick={() =>
            setFilteredResList(
              resList.filter((res) => res.info.avgRating >= "4.5")
            )
          }
        >
          Top Rated Restaurants
        </button>
       </div>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
