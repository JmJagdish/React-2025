import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurantService";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data ?? []);
    } catch (error) {
      setRestaurants([]);
    }
  };

  return restaurants;
};

export default useRestaurant;
