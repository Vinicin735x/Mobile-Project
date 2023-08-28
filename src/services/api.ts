import axios from "axios";

export const api = axios.create({
    baseURL: "https://august-project.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})
