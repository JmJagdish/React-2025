import { FiClock, FiShoppingCart } from "react-icons/fi";
import Button from "../ui/Button";

const Grocery = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-8">
      <div
        className="max-w-md w-full backdrop-blur-xl
                    border border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.45)]
                    cursor-pointer rounded-2xl p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-white text-yellow-400">
            <FiShoppingCart size={32} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Grocery Page</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-white mb-4">
          <FiClock size={16} />
          <span>Work in progress</span>
        </div>
        <p className="text-white mb-6">
          We’re currently building an amazing Grocery experience for you. Soon
          you’ll be able to manage items, quantities, and checkout seamlessly.
        </p>
        <Button variant="glass" label="Continue Shopping" />
      </div>
    </div>
  );
};

export default Grocery;
