import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * @returns
 * Header
 * - - Logo  - Nav - Links - Cart
 * Body
 *  --- Search bar - Restaurants Card container - Reataurant card - img - name - cusuine  -star rating - delievery time
 * Footer
 *  - Copyright - links - Addresss -contact
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.Uq0tko6TL4ahhUGEhXMCPQAAAA?w=226&h=180&c=7&r=0&o=5&pid=1.7"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>{" "}
      </div>
    </div>
  );
};

const resobj = {
  id: "405798",
  name: "Chinese Wok",
  cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  locality: "Malleshwaram",
  areaName: "Malleshwaram",
  costForTwo: "₹250 for two",
  cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  avgRating: 4.4,
  parentId: "61955",
  avgRatingString: "4.4",
  totalRatingsString: "1.1K+",
  sla: {
    deliveryTime: 57,
    lastMileTravel: 6,
    serviceability: "SERVICEABLE",
    slaString: "55-60 mins",
    lastMileTravelString: "6.0 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-10-17 22:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
        description: "Delivery!",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "Delivery!",
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹179",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "4.1",
      ratingCount: "23",
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const ReastaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/91787199a6db7fc5c93d585e3a7f9dd1"
        alt="meghana-logo"
      />
      <h3> {resData.name} </h3>
      <p> {resData.cuisines.join(",")}</p>
      <p>{resData.avgRating + "*"}</p>
      <p>{resData.costForTwo}</p>
      <p>{resData.sla.deliveryTime + " " + "min"} </p>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="res-conatainer">
        <ReastaurantCard resData={resobj} />
        {/* <ReastaurantCard resName="KFC" cuisine="Burger , Fast Food" /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p> Nihal Sandhu</p>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
