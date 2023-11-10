import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // withCredentials: true,
});

const API = {
  fetchLoads: () => http.get("/loads").then((res) => res.data),
  fetchDeviations: () => http.get("/deviations").then((res) => res.data),
};

export default API;
