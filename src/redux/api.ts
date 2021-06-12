import axios from 'axios';

const GHOST_BASE_URL = 'http://127.0.0.1:8000';

const ghostApi = axios.create({ baseURL: GHOST_BASE_URL });

export default ghostApi;
