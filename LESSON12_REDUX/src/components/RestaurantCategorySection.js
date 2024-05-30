import { useState } from "react";
import ItemCard from "./ItemCard";
const RestaurantCategorySection = ({ info, dropDown, setShowIndex }) => {
  console.log(info);

  const handleClick = () => {
    //setDropDown(!dropDown);
    setShowIndex();
  };
  return (
    <div className=" w-6/12 m-auto shadow-md rounded-sm bg-gray-100">
      {/* heading */}
      <button
        className="w-full flex my-3 mx-2 p-2  justify-between"
        onClick={handleClick}
      >
        <span className="text-lg font-semibold">
          {info?.title} ({info?.itemCards.length})
        </span>
        <span className="px-2">⬇️</span>
      </button>

      {/* body */}
      <div>
        {dropDown &&
          info?.itemCards.map((ic) => (
            <ItemCard key={ic?.card?.info?.data?.id} data={ic?.card?.info} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategorySection;
