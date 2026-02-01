import { useEffect, useState } from "react";
import { RES_API } from "../utils/constant";
import resList from "../utils/mockData";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_API);
      const json = await response.json();

      const apiData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(apiData);
    } catch (error) {
      console.warn("Using mock data due to API error");
    }
  };
  return restaurants;
};

export default useRestaurant;
