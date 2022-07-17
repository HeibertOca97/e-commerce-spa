import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.responseType = "json";

export default axios;
