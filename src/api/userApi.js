import axios from 'axios';

const API_BASE_URL = process.env.PARCEL_API_BASE_URL;

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
    return response.data;
} catch (error) {
    throw error;
};
};

export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/users/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUserAccount = async (userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};