import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{color: 'rgb(33,37,41)', background: 'rgb(1,117,231)', borderRadius: '15px', ml: '20px', mr: '7px'}}>
                {exercise.bodyPart} 
            </Button>
            <Button sx={{background: 'rgb(33,37,41)', color: 'rgb(1,117,231)', borderRadius: '15px'}}>
                {exercise.target} 
            </Button>
        </Stack>
        <Typography ml='20px' fontWeight='bold' color='rgb(33,37,41)' textTransform='capitalize' mt='0px'>
            {exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard
