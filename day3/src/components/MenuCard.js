const MenuCard = (props) => {
  const { item } = props;
  // console.log(item);
  return (
    <div className="m-2">
      <div className="flex justify-between ">
        <div className="w-[70%]">
          <p className="font-bold">{item?.name}</p>
          <p className="font-extralight text-sm m-1">
          ₹{item?.price!=null ? item.price/100 : item.defaultPrice/100}
          </p>
          <p className="font-extralight text-sm text-wrap">
          {item?.description}
          </p>
        </div>
        <div className="flex justify-end">
          {item?.imageId ? <img
            className="rounded-lg h-[80%] w-[60%] shadow-lg content-end"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/" +
              item?.imageId
            }
          /> : <button className="bg-white py-1 px-4 m-2 font-mono text-green-500 rounded-lg hover:bg-slate-100">Add+</button> }
          
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default MenuCard;
