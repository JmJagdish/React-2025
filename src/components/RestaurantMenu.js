import { useState, useEffect } from "react";
import { RES_MENU_API } from "../utils/constant";
import mockMenuData from "../utils/mockMenuData";
import { useParams } from "react-router";
import ShimmerCard from "./ShimmerCard";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FaFire } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(RES_MENU_API + resId);

      const json = await response.json();

      const menuInfo = json?.data?.cards?.[2]?.card?.card?.info;

      setResData(menuInfo);
    } catch (error) {
      console.warn("Using mock menu data:", error.message);
      setResData(mockMenuData[resId]);
    }
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, restaurantName: resData.restaurantName }));
  }  

  return resData === null ? (
    <ShimmerCard />
  ) : (
    <div className="flex justify-center items-center mt-6">
      <div className="lg:w-300 bg-white/15 backdrop-blur-xl border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)] p-6 rounded-lg">
        <h1 className="font-bold text-white text-4xl pb-4">
          {resData.restaurantName}
        </h1>

        <div className="flex flex-col gap-6">
          {resData.menu?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-4 border-b border-gray-200 pb-6"
            >
              <div className="max-w-[65%]">
                <div className="flex items-center gap-2 text-sm">
                  {item.isVeg && (
                    <span>
                      <div
                        className="w-5 h-5 border-2 border-green-500 flex items-center justify-center
                                bg-white/20 backdrop-blur-sm rounded-sm "
                      >
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                      </div>
                    </span>
                  )}
                  {item.isBestSeller && (
                    <span className="text-orange-500 font-semibold flex items-center gap-1">
                      <FaFire size={20} className="text-orange-500" />{" "}
                      Bestseller
                    </span>
                  )}
                </div>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 font-medium text-white">₹{item.price}</p>

                {item.rating && (
                  <p className="mt-1 flex gap-2 text-sm text-white">
                    <MdStar size={18} className="text-yellow-300" />{" "}
                    {item.rating}
                  </p>
                )}

                <p className="mt-2 text-sm text-white leading-relaxed">
                  {item.description}
                </p>

                <Button variant="glass" className="mt-3 px-3 py-1 text-sm">
                  More Details &gt;
                </Button>
              </div>

              <div className="relative w-28 h-20 shrink-0 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full relative h-20 rounded-xl"
                />

                <Button
                  variant="outline"
                  className="left-1/2 text-green-600 bg-white font-bold -bottom-5 z-20 -translate-x-1/2 absolute"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
