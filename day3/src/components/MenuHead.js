const MenuHead = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    feeDetails,
    expectationNotifiers,
    locality,
    city,
    totalRatingsString,
  } = props.data;
  return (
    <div className="w-7/12 bg-neutral-50 my-4 mx-auto p-4 rounded-xl">
      <div className="flex mx-4 flex-wrap justify-between">
        <div>
          <span className="font-bold text-xl">{name}</span>
          <p className="font-extralight text-xs mt-2">{cuisines.join(", ")}</p>
          <p className="font-normal text-xs mt-1">
            {locality}, {city}
          </p>
        </div>
        <div className="mr-5 border-2 border-slate-200 px-2 rounded-lg justify-center">
          <p className="font-semibold text-yellow-300 mx-2 mt-1 mb-2 text-center">
            ⭐{avgRatingString}
          </p>
          <hr></hr>
          <p className="font-medium text-xs mt-2">{totalRatingsString}</p>
        </div>
      </div>
      <hr className="m-2"></hr>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-xs mx-4 my-1">
            {expectationNotifiers[0].text}
          </p>
        </div>
        <div>
          <p className="mr-6 font-bold">{costForTwoMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHead;
