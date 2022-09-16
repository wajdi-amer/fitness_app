import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import rightArrowIcon from '../assets/icons/right-arrow.png';
import leftArrowIcon from '../assets/icons/left-arrow.png';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src={leftArrowIcon} alt='left-arrow' width='30px'/>
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src={rightArrowIcon} alt='right-arrow' width='30px'/>
    </Typography>
  )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
      {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          </Box>
        )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
