import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger14.firebaseio.com/'
});

export default instance;
