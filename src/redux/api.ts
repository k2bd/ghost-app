import axios from 'axios';

const GHOST_API_URL = process.env.REACT_APP_GHOST_API_URL;

console.log(GHOST_API_URL);

const ghostApi = axios.create({ baseURL: GHOST_API_URL });

export default ghostApi;
