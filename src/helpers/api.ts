import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

console.log({ apiURL });

const api = axios.create({
  baseURL: apiURL,
  timeout: 10000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export default api;
