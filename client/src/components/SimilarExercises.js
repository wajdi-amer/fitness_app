import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import Loader from '../components/Loader';

const SimilarExercises = ({ similarTarget, similarEquipment }) => {
  return (<>
    <div className='similarExercises-container' style={{marginTop: '70px'}}>
      <Typography variant='h4' marginLeft='20px'>Similar <span style={{ color: 'rgb(1,117,231)' }}>Target</span> Exercises:</Typography>
      <Stack direction='row' justifyContent='space-around'>
        {similarTarget.length ?
          <Box className='mt-5' width='1300px'>
            <HorizontalScrollbar data={similarTarget} width='200px' />
          </Box>
          : <Loader />}
      </Stack>
    </div>
    <div className='similarExercises-container' style={{height: '700px'}}>
      <Typography variant='h4' marginLeft='20px'>Similar <span style={{ color: 'rgb(1,117,231)' }}>Equipment</span> Exercises:</Typography>
      <Stack direction='row' justifyContent='space-around'>
        {similarEquipment.length ?
          <Box className='mt-5' width='1300px'>
            <HorizontalScrollbar data={similarEquipment} width='200px' />
          </Box>
          : <Loader />}
      </Stack>
    </div>
    </>
  )
}

export default SimilarExercises
