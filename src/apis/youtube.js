import axios from 'axios';

const KEY = 'AIzaSyAEN4U7Gd3Ih8q6W1lRYBgwce9G3HNx4nQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});