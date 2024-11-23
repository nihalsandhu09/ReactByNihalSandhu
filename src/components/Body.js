import ReastaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // state variable  - local state -  super powerfull variable
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants = json.data.cards
      .map((card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .find(
        (restaurantArray) =>
          Array.isArray(restaurantArray) && restaurantArray.length > 0
      );

    // console.log(restaurants);
    setListofRestaurants(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline check you internet connection</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex gap-3 w-4/5 m-auto ">
        <div className="flex w-96 text-center border-black">
          <input
            className="w-72 border-none outline-none"
            type="text"
            placeholder="Search You Want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border rounded bg-white border-2px px-3 py-1 font-medium"
            onClick={() => {
              const filterRestaurant = listofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="border rounded bg-white border-2px px-1 py-1 font-medium"
          onClick={() => {
            //    Filter logic here
            const filterdList = listofRestaurants.filter((res) => {
              return res.info.avgRating > 4.4;
            });
            setFilteredRestaurant(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4  gap-3">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              className="restaurants"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <ReastaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
