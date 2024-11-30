import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCatogry = ({ data, showItems, setShowIndex, dummy }) => {
  console.log("data of restaurantCategory", data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* {header} */}
      <div className=" my-5 shadow-lg p-4  ">
        <div
          className=" flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span className=" cursor-pointer"> 🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
      {/* {Accordian Body} */}
    </div>
  );
};
export default RestaurantCatogry;
