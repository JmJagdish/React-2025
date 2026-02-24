import axios from "axios";

const API_BASE_URL = process.env.PARCEL_API_BASE_URL ?? "http://localhost:5000";

export const getRestaurants = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/restaurants`);
    return response.data;
  } catch (error) {
    console.error("Restaurant API Error:", error);
    throw error;
  }
};
