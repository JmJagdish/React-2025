import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div
      className="rounded-2xl w-64 border border-gray-200 bg-white p-3
                    shadow-sm hover:shadow-lg transition-all duration-300
                    hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
        <div
          className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-3 py-1
                        text-sm font-semibold text-white backdrop-blur"
        >
          ITEMS AT • {costForTwo}
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-between h-27.5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="flex items-center gap-1 font-medium text-green-600">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-500 truncate">{areaName}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
