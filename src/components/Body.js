import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";

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
    <div className="shimmer-container">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          <button className="filter-btn" onClick={handleRatingFilter}>
            Rating: 4.3+
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
