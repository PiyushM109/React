import { useState } from "react";
import MenuList from "./MenuList";

const MenuAccordion = (props) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = ()=>{
        setShowItems(!showItems);
    }
  const { data } = props;
  // console.log(data);
  return (
    <div className="w-7/12 bg-neutral-50 my-4 mx-auto p-4 rounded-xl drop-shadow-md">
      <div className="flex justify-between cursor-pointer " onClick={handleClick}>
        <p className="font-bold">
          {data.title} ({data.itemCards.length})
        </p>
        <p>{showItems ? "⬆️" : "⬇️" }</p>
      </div>
      <div >
        {showItems && <MenuList list={data.itemCards} />}
      </div>
    </div>
  );
};

export default MenuAccordion;
