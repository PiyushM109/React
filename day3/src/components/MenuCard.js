const MenuCard = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className="m-2">
      <div className="flex justify-between ">
        <div className="w-[70%]">
          <p className="font-bold">{item?.name}</p>
          <p className="font-extralight text-sm m-1">
          ₹{item?.price/100}
          </p>
          <p className="font-extralight text-sm text-wrap">
          {item?.description}
          </p>
        </div>
        <div className="flex justify-end">
          <img
            className="rounded-lg h-[80%] w-[60%] shadow-lg content-end"
            alt="dish-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              item?.imageId
            }
          />
          
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default MenuCard;
