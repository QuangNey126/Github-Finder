import axios from 'axios';

const baseURL = 'https://api.github.com';
const UserAPI = {
    searchUser : (search) => {
        return axios.get(
            `${baseURL}/search/users?q=${search}`
        );
    },

    fetchUsers : ()=>{
       return axios.get("https://api.github.com/users"); // promise
    },
};

export default UserAPI;