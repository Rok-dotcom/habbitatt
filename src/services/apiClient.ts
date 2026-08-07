import axios from "axios";

// Central Axios instance. Point this at your real backend once it's ready —
// nothing else in the app needs to change, just this baseURL and the
// service functions in this folder.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("habitatt-token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
