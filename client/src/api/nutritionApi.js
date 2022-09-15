import axios from "axios";

export default axios.create({
    baseURL: 'https://api.api-ninjas.com',
    headers: {
        'X-Api-Key': process.env.REACT_APP_NUTRITION_API_KEY,
    }
})