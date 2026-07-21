import axiosInstance from "../axiosInstance";

export const authAPI = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.response?.data?.error || error.message || "Registration failed! Please try again.";
      throw new Error(errorMsg);
    }
  },

  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.response?.data?.error || error.message || "Invalid Email or Password!";
      throw new Error(errorMsg);
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Session expired! Please login again.";
      throw new Error(errorMsg);
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Logout failed";
      throw new Error(errorMsg);
    }
  }
};
