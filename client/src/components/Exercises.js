import React, {useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import fetchData from '../utils/fetchData';
import exercisesApi from '../api/exercisesApi';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 420, behavior: 'smooth'})
  }


  return (
    <Box id='exercises' mt='20px' minHeight='500px'>
      <Typography variant='h4' mb='40px'>Showing Results:</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' mb='100px'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination 
            // variant='outlined'
            color='primary'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size='large'
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
