import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import FilterBar from "./FilterBar";
import { RES_URL } from "../utils/constants";

 
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RES_URL
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
  console.log(resList);

  return resList.length == 0 ? (
    <div>
      <FilterBar resList={resList} setFilteredResList={setFilteredResList} searchText={searchText} />
      <Shimmer />
    </div>
    
  ) : (
    <div className="body">
      <FilterBar resList={resList} setFilteredResList={setFilteredResList} searchText={searchText} setSearchtext={setSearchtext} />
      <div className="flex flex-wrap justify-evenly">
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
