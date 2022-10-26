import axios from "axios";

const API = axios.create({

    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID OTRonXY2isJ0RKCLUcUCPBXw7RfCbFrwoif6JmJr4q4"
    }
})

export default API;