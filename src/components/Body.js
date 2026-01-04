import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";
import Button from "../ui/Button";

const Body = () => {
  const listOfRestaurants = useRestaurant();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleRatingFilter = () => {
    const filtered = listOfRestaurants.filter(
      (res) => Number(res.info.avgRating) >= 4.3
    );
    setFilteredRestaurant(filtered);
  };

  return listOfRestaurants.length === 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 mx-auto container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  ) : (
    <div className="m-6">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input
            className="p-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-0"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button label="Search" onClick={handleSearch} />
        </div>
        <Button label="Rating: 4.3+" onClick={handleRatingFilter} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 mx-auto container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
