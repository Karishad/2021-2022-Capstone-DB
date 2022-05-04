import axios from "axios";

// Create Axios instance to connect React app to Express server

const PORT = 4000;

const instance = axios.create({
    baseURL: `http://localhost:${PORT}`
});

export default instance;