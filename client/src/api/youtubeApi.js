import axios from "axios";

export default axios.create({
    baseURL: 'https://youtube-search-and-download.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
})