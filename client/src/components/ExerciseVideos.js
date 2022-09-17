import React from 'react';
import { Typography, Stack } from '@mui/material';

const ExerciseVideos = ({ videos, name }) => {
  console.log(videos);
  return (
    <div className='videos-container'>
      <Typography variant='h4' marginLeft='20px'>Watch <span style={{ textTransform: 'capitalize', color: 'rgb(1,117,231)' }}>
        {name}</span> Videos...
      </Typography>
      <Stack direction='row' justifyContent='space-around' mt='20px' >
        {videos?.slice(0, 3).map((item, index) => (
          <div>
            <a href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
              key={index}
              target='_blank'
              rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
            <Typography variant='h6'>{item.video.title}</Typography>
            <Typography variant='p'>{item.video.channelName}</Typography>
          </div>
        ))}
      </Stack>
    </div>
  )
}

export default ExerciseVideos
