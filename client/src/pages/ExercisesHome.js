import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const ExercisesHome = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    )
}

export default ExercisesHome;
