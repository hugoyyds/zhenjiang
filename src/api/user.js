import axios from '@/utils/axios';


export default {
    users() {
        return axios.get('/users');
    }
};
