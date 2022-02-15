import axios from "axios";

// Create Axios instance using base URL of SQLite server

const PORT = 4000;

const instance = axios.create({
    baseURL: `http://localhost:${PORT}`
});

export default instance;