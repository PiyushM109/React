import React from 'react'

function FilterBar(props) {
    const {resList,setFilteredResList,searchText} = props;
  return (
    <div><div className="filter flex justify-between items-center h-20 m-3">
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
  </div></div>
  )
}

export default FilterBar;