import axios from 'axios';

export default axios.create({
    baseURL: 'https://f10a-47-14-142-232.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});