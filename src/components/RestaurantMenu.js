import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import { CDN_URL } from "../utils/constants";
import RestaurantCatogry from "./RestaurantCatogry";

// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const cardWithItemCards = resInfo?.cards.find((card) => {
    return card?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  });
  const itemCards =
    cardWithItemCards.groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards || [];
  {
    /** */
  }

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

  console.log(categories);
  // console.log(itemCards);

  return (
    <div className=" w-2/5 m-auto w">
      <h1 className="text-3xl font-bold">{name}</h1>
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
        categories.map((category) => {
          return (
            <RestaurantCatogry
              key={category?.card?.card?.title}
              data={category?.card?.card}
            />
          );
        })
      ) : (
        <p>No categories available</p>
      )}

      {/* <ul>
        {/* {itemCards.map((item) => {
          const { name, price, description, defaultPrice, imageId } =
            item?.card?.info || {};
          const { rating, ratingCount } =
            item?.card?.info?.ratings?.aggregatedRatings || {};
          return (
            <div className="parent ">
              <div className="flex gap-10 mt-8" key={item?.card?.info?.id}>
                <div className=" w-4/5">
                  <h1 className="text font-bold text-gray-800">
                    {" "}
                    {item?.card?.info?.name}{" "}
                  </h1>
                  <div className="flex">
                    <p>{"₹"}</p>
                    <h5 className="font-bold">
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </h5>
                  </div>
                  <p className=" opacity-60">
                    {item?.card?.info?.description.slice(0, 100)}
                  </p>
                </div>
                <div className="w-3/12 ">
                  <img
                    className="rounded-xl w-40 h-40"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
              <hr className="mt-10"></hr>
            </div>
          );
        })} }
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
