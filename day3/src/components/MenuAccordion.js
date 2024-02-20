import MenuList from "./MenuList";

const MenuAccordion = (props)=>{
    const {data} = props;
    // console.log(data);
    return (
        <div className="w-7/12 bg-neutral-50 my-4 mx-auto p-4 rounded-xl">
            <div className="flex justify-between">
            <p className="font-bold">{data.title} ({data.itemCards.length})</p>
            <p>⬇️</p>
            </div>
            <div>
                <MenuList list = {data.itemCards}/>
            </div>

        </div>
    )
}

export default MenuAccordion;