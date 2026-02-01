import RestaurantCard, { withRestPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";
import Button from "../ui/Button";
import { Link } from "react-router";
import SearchInput from "../ui/SearchInput";

const Body = () => {
  const listOfRestaurants = useRestaurant();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurant = withRestPromoted(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurant(filtered);
  };

  const handleRatingFilter = () => {
    const filtered = listOfRestaurants.filter(
      (res) => Number(res.info.avgRating) >= 4.3,
    );
    setFilteredRestaurant(filtered);
  };

  return listOfRestaurants.length === 0 ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 mx-auto container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  ) : (
    <div className="mt-6 max-w-full mb-6">
      <div className="max-w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        <div className="flex gap-2">
          <SearchInput
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={handleSearch}
          />
          <Button variant="glass" label="Search" onClick={handleSearch} />
        </div>
        <div>
          <Button
            variant="glass"
            label="Rating: 4.3+"
            onClick={handleRatingFilter}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
