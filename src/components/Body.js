import ReastaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // state variable  - local state -  super powerfull variable
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants = json.data.cards
      .map((card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .find(
        (restaurantArray) =>
          Array.isArray(restaurantArray) && restaurantArray.length > 0
      );

    console.log(restaurants);
    setListofRestaurants(restaurants || []);
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //    Filter logic here
            const filterdList = listofRestaurants.filter((res) => {
              return res.info.avgRating > 4.4;
            });
            setListofRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conatainer">
        {listofRestaurants.map((restaurant) => {
          return (
            <ReastaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
