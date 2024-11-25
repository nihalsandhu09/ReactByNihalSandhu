import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import { CDN_URL } from "../utils/constants";
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

  // console.log(itemCards);

  return (
    <div className=" w-2/5 m-auto">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className=" border py-4 px-4 mt-4 rounded-2xl shadow-2xl ">
        <div className="flex items-center gap-3 ">
          <h2 className="text-lg font-semibold">{"✳" + "  " + avgRating}</h2>
          <p>-</p>
          <h2 className="text-lg font-bold">{costForTwoMessage}</h2>
        </div>

        <h2 className="text-lg font-medium opacity-60">{cuisines.join(",")}</h2>
      </div>

      <h1 className="text-3xl mt-12 font-bold"> Menu</h1>
      <ul>
        {itemCards.map((item) => {
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
                <div className="w-3/12">
                  <img
                    className="rounded-xl"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
              <hr className="mt-10"></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
