import React, { useState } from 'react';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import exercises from '../api/exercises';
import { fetchData } from '../utils/fetchData';


const Exercises = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        if(searchTerm) {
            const exercisesData = await fetchData(exercises, '/bodyPartList');

            console.log(exercisesData);
        }
    }
  return (
    <Stack alignItems='center' mt='35px' p='10px'>
        <Typography fontWeight={700} textAlign='center'>Find Your Favorite Exercise!</Typography>
        <Box mt='10px'>
            <TextField
            variant='standard'
            type='text'
            placeholder='Search Exercises..'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value.toLowerCase())}} />
            <Button variant='contained' sx={{height: '24px'}} onClick={handleSearch}>Search</Button>
        </Box>

        <HorizontalScrollbar/>
    </Stack>
  )
}

export default Exercises
