import { useSelector, useDispatch } from "react-redux";
import Button from "../ui/Button";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return cartItems.length === 0 ? (
    <div className="text-center min-h-[60vh] text-white">
      <h1 className="text-2xl pt-40 font-bold">Your Cart is Empty 🛒</h1>
      <p>Add items from a restaurant menu</p>
    </div>
  ) : (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Cart</h1>
      <div className="w-full m-auto text-left">
        <div className="border-b border-white pb-4 mb-6">
          <h2 className="text-2xl font-bold text-white">
            {cartItems[0].restaurantName}
          </h2>
        </div>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start border-b border-white pb-4"
            >
              <div className="flex gap-4 max-w-[70%]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-white line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center text-white gap-3 mt-2">
                    <Button
                      variant="glass"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      −
                    </Button>

                    <span className="font-medium text-white">
                      {item.quantity}
                    </span>

                    <Button
                      variant="glass"
                      onClick={() => dispatch(addItem(item))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <span className="font-semibold text-white">
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t pt-4 space-y-2 text-white">
          <div className="flex justify-between text-sm">
            <span>Item Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="flex justify-between text-white font-semibold text-lg">
            <span>Grand Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Button variant="glass" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>

          <Button variant="glass">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
