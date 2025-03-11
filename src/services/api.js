import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5551/api/',
});

export const getDashboardData = async () => {
    const response = await api.get('/notes');
    await response.json();
    return response.data;
};

export const getProjectsData = async () => {
    const response = await api.get('/users');
    await response.json();
    return response.data;
};


export default api;
