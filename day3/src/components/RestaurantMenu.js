import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId);
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();

    setResInfo(json);
    console.log(resInfo);
    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const menu =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {menu?.map((dish) => (
          <li key={dish?.card?.info?.id}>
            {dish?.card?.info?.name} - {dish?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
