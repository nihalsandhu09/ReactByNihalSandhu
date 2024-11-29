import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import { CDN_URL } from "../utils/constants";
import RestaurantCatogry from "./RestaurantCatogry";
import { useState } from "react";

// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "dummy data ";
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log("data of restaurant", resInfo);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards
    ?.find((card) =>
      card.groupedCard?.cardGroupMap?.REGULAR.cards.some(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    )
    ?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("all catpgries", categories);
  // console.log(itemCards);

  return (
    <div className=" w-2/5 m-auto w">
      <h1 className="text-3xl font-bold mt-7">{name}</h1>
      <div className=" border py-4 px-6 mt-4 rounded-2xl shadow-2xl ">
        <div className="flex items-center gap-3 ">
          <h2 className="text-lg font-semibold ">{"✳" + "  " + avgRating}</h2>
          <p>-</p>
          <h2 className="text-lg font-bold">{costForTwoMessage}</h2>
        </div>

        <h2 className="text-sm font-medium opacity-60 mt-2">
          {cuisines.join(",")}
        </h2>
      </div>

      <h1 className="text-3xl mt-12 font-bold"> Menu</h1>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => {
          return (
            // this is controlled component
            <RestaurantCatogry
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={() =>
                setShowIndex(showIndex === index ? null : index)
              }
              dummy={dummy}
            />
          );
        })
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
