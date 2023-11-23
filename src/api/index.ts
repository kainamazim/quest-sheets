import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    url: apiUrl,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;
