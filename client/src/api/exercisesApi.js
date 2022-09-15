import axios from "axios";

export default axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXERCISES_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
})