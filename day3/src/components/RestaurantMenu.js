import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import MenuHead from "./MenuHead";
import MenuAccordion from "./MenuAccordion";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId);
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo)
    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  if (resInfo == null) {
    return <MenuShimmer />;
  }
  // c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"  ||
  const info =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
  return (
    <div className="menu">
      <MenuHead data = {info}/>
      <ul>
        {categories?.map((card) => (
          <li >
            <MenuAccordion data={card?.card?.card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
