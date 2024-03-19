import axios from "axios";

import CONFIG from "@/config";

const api = axios.create({
    baseURL: CONFIG.BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;
