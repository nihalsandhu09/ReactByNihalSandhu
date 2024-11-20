import ReastaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search You Want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
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
      <div className="res-conatainer">
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
