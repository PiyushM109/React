import MenuCard from "./MenuCard";

const MenuList = ({list}) =>{
    // console.log(list);
    return (
        <div>
            {list.map((dish)=>
                <MenuCard item={dish?.card?.info}/>
            )}
        </div>
    )
}

export default MenuList;