import React, {useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import fetchData from '../utils/fetchData';
import exercisesApi from '../api/exercisesApi';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises);
  return (
    <Box id='exercises'>
      <Typography variant='h4'>Showing Results:</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises
