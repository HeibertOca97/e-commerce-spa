import axios from 'axios';

export const request = axios.create({
    headers: {
        "Content-Type": 'application/json',
    },
    baseURL: 'http://localhost:5000/api/v1',
    
});

export const auth = axios.create({
    headers: {
        "Content-Type": 'application/x-www-urlencoded'
    },
    baseURL: 'http://localhost:5000/api/v1',
    
});

