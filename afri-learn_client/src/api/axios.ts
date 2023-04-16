import axios from "axios";

// const BASE_URL = "http://localhost:3500";
const BASE_URL = "https://learning-app-ten.vercel.app";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
