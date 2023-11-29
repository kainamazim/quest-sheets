import axios from "axios";

const api = axios.create({
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;
