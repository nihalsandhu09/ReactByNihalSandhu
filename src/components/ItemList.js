import { CDN_URL } from "../utils/constants";
import { useCallback, useContext } from "react";
import userContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
  console.log("Itemslist", items, dummy);
  const { loggedInUser } = useContext(userContext);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an  action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="parent  " key={item?.card?.info?.id}>
            <div className="flex gap-10 mt-8" key={item?.card?.info?.id}>
              <div className=" w-4/5">
                <h1 className="text font-bold text-gray-800">
                  {" "}
                  {item?.card?.info?.name}{" "}
                </h1>
                <div className="flex">
                  <p className="font-bold pr-0.5">{"₹"}</p>
                  <h5 className="font-bold">
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h5>
                </div>
                <p className=" opacity-35 font-semibold text-sm mt-4">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="w-3/12 relative ">
                <img
                  className="rounded-xl "
                  src={CDN_URL + item?.card?.info?.imageId}
                />
                <button
                  className="  font-bold text-green-500   py-2  px-9 rounded-lg bg-white border-e-white absolute -bottom-5 left-7 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
            <div>{loggedInUser}</div>
            <hr className="mt-10"></hr>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
