import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCatogry = ({ data }) => {
  console.log("data of restaurantCategory", data);
  const [isOpen, setIsopen] = useState(false);

  return (
    <div>
      {/* {header} */}
      <div className="  w-full  my-5 shadow-lg p-4">
        <div className=" flex justify-between">
          <span className="text-lg font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span> 🔽</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
      {/* {Accordian Body} */}
    </div>
  );
};
export default RestaurantCatogry;
