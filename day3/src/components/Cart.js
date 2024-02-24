import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);
    const dispatch = useDispatch();

    const handleClrBtn = ()=>{
        dispatch(clearCart());
    }
  return (
    <div className="w-7/12 bg-neutral-50 my-4 mx-auto p-4 rounded-xl">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Cart</h1>
        <button className="bg-white h-10 py-1 px-4 m-2 font-mono text-red-500 rounded-lg hover:bg-slate-100" onClick={handleClrBtn}>
              clearCart
            </button>
      </div>
      <div>
        {cartItems.map((dish) => (
          <MenuCard item={dish} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
