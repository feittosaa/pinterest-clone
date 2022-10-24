import axios from "axios";

const API = axios.create({
    baseURL: "https://api.unsplash.com/?client_id=OTRonXY2isJ0RKCLUcUCPBXw7RfCbFrwoif6JmJr4q4"
    // baseURL: "https://api.unsplash.com/"

})

export default API;