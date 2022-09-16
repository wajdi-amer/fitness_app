import React from 'react';
import { Stack, Typography } from '@mui/material';
import dumbbellIcon from '../assets/icons/dumbbell-icon.png';
import '../index.css';

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '3px solid rgb(33,37,41)' : '',
        width: '170px',
        height: '150px'
    }}
    >
        <img src={dumbbellIcon} alt='dumbbell' style={{width: '90px', height: '90px'}}/>
        <Typography fontWeight='bold' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
