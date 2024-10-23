import ReastaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // state variable  - local state -  super powerfull variable
  const [listofRestaurants, setListofRestaurants] = useState(resList);
  // normal js variable
  //   let listofRestaurants = [
  //     {
  //       info: {
  //         id: "5938",
  //         name: "Burger King",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
  //         locality: "Tasker Town",
  //         areaName: "Shivaji Nagar",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.4,
  //         parentId: "166",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "37K+",
  //         sla: {
  //           deliveryTime: 43,
  //           lastMileTravel: 2.7,
  //           serviceability: "SERVICEABLE",
  //           slaString: "40-45 mins",
  //           lastMileTravelString: "2.7 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-10-19 03:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
  //               description: "Delivery!",
  //             },
  //             {
  //               imageId: "Rxawards/_CATEGORY-Burger.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId:
  //                       "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
  //                   },
  //                 },
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Burger.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "60% OFF",
  //           subHeader: "UPTO ₹120",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-84dd7d50-6d34-4a16-8d15-bb5d3c9ac9ef",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "69876",
  //         name: "Subway",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/2794d1dd-65c7-465a-906e-e2078c46dcdb_69876.jpg",
  //         locality: "UB City",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //         avgRating: 3.8,
  //         parentId: "2",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "3.6K+",
  //         sla: {
  //           deliveryTime: 39,
  //           lastMileTravel: 0.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "35-40 mins",
  //           lastMileTravelString: "0.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-10-18 23:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹119",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "3.7",
  //             ratingCount: "281",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-84dd7d50-6d34-4a16-8d15-bb5d3c9ac9ef",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/subway-ub-city-central-bangalore-rest69876",
  //         type: "WEBLINK",
  //       },
  //     },
  //   ];

  return (
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
