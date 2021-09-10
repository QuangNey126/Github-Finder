import axios from 'axios';

const baseURL = 'https://api.github.com';
const UserAPI = {
    fetchUser : (search) => {
        return axios.get(
            `${baseURL}/search/users?q=${search}`
        );
    },
};

export default UserAPI;