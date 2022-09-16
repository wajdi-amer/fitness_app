import React, { useEffect, useState } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import exercisesApi from '../api/exercisesApi';
import { fetchData } from '../utils/fetchData';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchPageData = async () => {
            const bodyPartsData = await fetchData(exercisesApi, '/bodyPartList');

            setBodyParts(['all', ...bodyPartsData.data]);
        }

        fetchPageData();
    }, []);

    const handleSearch = async () => {
        if (searchTerm) {
            const exercisesData = await fetchData(exercisesApi);

            const searchedExercises = exercisesData.data.filter(
                (exercise) => exercise.name.toLowerCase().includes(searchTerm)
                    || exercise.target.toLowerCase().includes(searchTerm)
                    || exercise.equipment.toLowerCase().includes(searchTerm)
                    || exercise.bodyPart.toLowerCase().includes(searchTerm)
            );

            setSearchTerm('');
            setExercises(searchedExercises);
            window.scrollTo({top: 420, behavior: 'smooth'})
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
                    onChange={(e) => { setSearchTerm(e.target.value.toLowerCase()) }} />
                <Button variant='contained' sx={{ height: '24px' }} onClick={handleSearch}>Search</Button>
            </Box>
            <Box className='mt-5' width='1000px'>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    )
}

export default SearchExercises;
