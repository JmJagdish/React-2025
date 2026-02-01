import { CDN_URL } from "../utils/constant";
import { MdStar } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div
      className="
                group relative rounded-2xl p-6 bg-white/15 backdrop-blur-xl border border-white/20 
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.45)]
                cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="h-50 w-full object-fill group-hover:scale-105 relative transition-transform duration-300 hover:scale-105"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Price Badge */}
        <div
          className="absolute bottom-2 left-2 rounded-lg  bg-black/40 backdrop-blur-md px-3 py-1
        text-sm font-semibold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
        >
          ITEMS AT • {costForTwo}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white truncate">{name}</h3>
          <p className="text-sm text-white/70 line-clamp-2">
            {cuisines.join(", ")}
          </p>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-1 font-medium text-green-400">
            <MdStar size={18} className="text-yellow-300" /> {avgRating}
          </span>
          <span className="text-white/60 truncate">{areaName}</span>
        </div>
      </div>
    </div>
  );
};

export const withRestPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />

        <label
          className="absolute top-2 left-2 z-20
                    rounded-full bg-linear-to-r from-yellow-600 to-yellow-500
                    px-4 py-1 text-xs font-bold text-white shadow-md"
        >
          PROMOTED
        </label>
      </div>
    );
  };
};

export default RestaurantCard;
