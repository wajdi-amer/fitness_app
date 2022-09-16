import React from 'react';
import { Stack, Typography } from '@mui/material';
import '../index.css';
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

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '3px solid rgb(33,37,41)' : '',
        borderBottom: bodyPart === item ? '3px solid rgb(33,37,41)' : '',
        width: '170px',
        height: '150px'
    }}
    onClick={() => {
      setBodyPart(item)
    }}
    >
        <img src={icons[item]} alt={item+'-icon'} style={{width: '90px', height: '90px'}}/>
        <Typography fontWeight='bold' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
