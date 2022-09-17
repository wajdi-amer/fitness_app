import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import chestIcon from '../assets/icons/chest.png';
import backIcon from '../assets/icons/back.png';
import lowerArmsIcon from '../assets/icons/lower-arms.png';
import upperArmsIcon from '../assets/icons/upper-arms.png';
import lowerLegsIcon from '../assets/icons/lower-legs.png';
import upperLegsIcon from '../assets/icons/upper-legs.png';
import shouldersIcon from '../assets/icons/shoulders.png';
import cardioIcon from '../assets/icons/cardio.png';
import neckIcon from '../assets/icons/neck.png';
import waistIcon from '../assets/icons/waist.png';
import fullBodyIcon from '../assets/icons/fullbody.png';

const icons = {
  'all': fullBodyIcon,
  'chest': chestIcon,
  'back': backIcon,
  'lower arms': lowerArmsIcon,
  'upper arms': upperArmsIcon,
  'lower legs': lowerLegsIcon,
  'upper legs': upperLegsIcon,
  'shoulders': shouldersIcon,
  'cardio': cardioIcon,
  'neck': neckIcon,
  'waist': waistIcon,
}

const Details = ({ exercise }) => {
  return (
    <Stack direction='row' className='exerciseDetails-card'>
      <Stack direction='column' mt='30px'>
        <Stack mb='20px' margin='10px' mt='0px'>
        <Typography variant='h3' textTransform='capitalize'>
          {exercise.name}
        </Typography>
        <Typography variant='p'>
          Exercises can help you boost your mood and energy! {exercise.name} is 
          a great exercise to work the {exercise.target} part of your {exercise.bodyPart}.
        </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Box width='250px'>
            <Button sx={{ width: '200px', color: 'rgb(33,37,41)', background: 'rgb(1,117,231)', borderRadius: '15px', ml: '20px', mr: '7px' }}>
              {exercise.bodyPart}
            </Button>
            <Button sx={{ width: '200px', background: 'rgb(33,37,41)', color: 'rgb(1,117,231)', borderRadius: '15px', ml: '20px', mr: '7px', mt: '8px' }}>
              {exercise.target}
            </Button>
            <Button sx={{ width: '200px', background: 'rgb(33,37,41)', color: 'rgb(1,117,231)', borderRadius: '15px', ml: '20px', mr: '7px', mt: '8px' }}>
              {exercise.equipment}            </Button>
          </Box>
          <Stack backgroundColor='rgba(33, 37, 41, 0.4)' height='160px' width='160px' marginRight='20px' border='1px solid black' borderRadius='100px' alignItems='center' justifyContent='center'>
            <img src={icons[exercise.bodyPart]} alt={exercise.bodyPart} width='100px' margin='auto' />
          </Stack>
        </Stack>
      </Stack>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' width='400px' />
    </Stack>
  )
}

export default Details;
