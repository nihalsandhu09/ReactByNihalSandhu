import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>

      <h1> Menu</h1>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price || item?.card?.info?.defaultPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
