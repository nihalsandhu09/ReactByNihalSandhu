import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=884802&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
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
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>

      <h1> Menu</h1>
      <ul>
        {itemCards.map((item) => {
          return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
