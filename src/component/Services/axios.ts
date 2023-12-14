import axios from "axios";
const base_URL = "http://localhost:3000";

export default axios.create({
    baseURL: base_URL,
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
});