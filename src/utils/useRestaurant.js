import { useEffect, useState } from "react";
import { RES_API } from "../utils/constant";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_API);
    const json = await response.json();

    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(resList);
  };
  return restaurants;
};

export default useRestaurant;
