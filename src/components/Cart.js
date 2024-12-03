import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const Cart = () => {
  // subscribe to the right
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalprice =
    cartItems.reduce((total, item) => {
      return (
        total + (item?.card?.info?.price || item?.card?.info?.defaultPrice)
      );
    }, 0) / 100;
  return (
    <div className="   w-full bg-gray-200 h-full">
      <h1 className="text-xl font-bold"> Cart</h1>
      <button
        className=" border bg-blue-500 p-2 rounded text-white font-bold"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && <h1>Cart is Empty Add items to the Cart</h1>}
      <div className="w-1/2 m-auto bg-white p-2">
        {cartItems.map((item) => {
          return (
            <div className="parent   " key={item?.card?.info?.id}>
              <div className="flex gap-10 mt-8 ">
                <div className="  ">
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
                <div className=" ">
                  <img
                    className="rounded-xl w-40 h-40"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name || "Cart item image"}
                  />
                </div>
              </div>

              <hr className="mt-10"></hr>
            </div>
          );
        })}
      </div>

      <div className=" w-1/2 bg-white m-auto px-1  mt-2 p-4">
        <div className="flex justify-between ">
          <h6 className="font-bold"> Total Items</h6>
          <h6 className="font-medium">{cartItems.length}</h6>
        </div>
        <hr className="my-3"></hr>
        <div className="flex justify-between ">
          <h6 className="font-bold">TotalPrice :</h6>
          <h6 className="font-medium"> {totalprice}</h6>
        </div>
      </div>
    </div>
  );
};
export default Cart;
