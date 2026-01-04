import { ShoppingCart, Clock } from "lucide-react";
import Button from "../ui/Button";

const Cart = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-blue-100 text-blue-600">
            <ShoppingCart size={32} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Cart Page</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
          <Clock size={16} />
          <span>Work in progress</span>
        </div>
        <p className="text-gray-600 mb-6">
          We’re currently building an amazing cart experience for you. Soon
          you’ll be able to manage items, quantities, and checkout seamlessly.
        </p>
        <Button label="Continue Shopping" />
      </div>
    </div>
  );
};

export default Cart;
