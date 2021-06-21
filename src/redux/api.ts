import axios from 'axios';

const GHOST_BASE_URL = 'https://ywub82hzp4.execute-api.us-east-1.amazonaws.com/main';

const ghostApi = axios.create({ baseURL: GHOST_BASE_URL });

export default ghostApi;
