import React from 'react';
import { Typography, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ videos, name }) => {
  return (
    <div className='videos-container'>
      <Typography variant='h4' marginLeft='20px'>Watch <span style={{ textTransform: 'capitalize', color: 'rgb(1,117,231)' }}>
        {name}</span> Videos...
      </Typography>
      { videos.length ? 
      <Stack direction='row' justifyContent='space-around' mt='20px' >
        {videos?.slice(0, 3).map((item, index) => (
          <div key={index}>
            <a href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
            <Typography variant='h6' maxWidth='400px'>{item.video.title}</Typography>
            <Typography variant='p'>{item.video.channelName}</Typography>
          </div>
        ))}
      </Stack> : <Loader /> } 
    </div>
  )
}

export default ExerciseVideos
