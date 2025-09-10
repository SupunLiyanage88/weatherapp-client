// src/api/userAPI.ts

import axios from "axios";

// Base URL for your backend
const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/auth";

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to set Authorization header dynamically
const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ---------------------- API METHODS ----------------------

// Register user
export const registerUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/register", data);
  return res.data;
};

// Login user
export const loginUser = async (data: { email: string; password: string }) => {
  const res = await api.post("/login", data);

  if (res.data?.token) {
    // save token in localStorage
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};

// Get all users (no auth check)
export const getAllUsers = async () => {
  const res = await api.get("/all");
  return res.data;
};

// Get logged-in user details (requires token)
export const getAuthUser = async () => {
  const res = await api.get("/user", { headers: authHeader() });
  return res.data;
};

// Logout (just clear token locally)
export const logoutUser = () => {
  localStorage.removeItem("token");
};
