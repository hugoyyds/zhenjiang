import axios from '@/utils/axios';


export default {
    login(credentials) {
        return axios.post('/auth/login', credentials);
    },
    register(user) {
        return axios.post('/auth/register', user);
    }
};
