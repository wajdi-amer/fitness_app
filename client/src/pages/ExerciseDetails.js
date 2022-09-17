import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData } from '../utils/fetchData'
import exercisesApi from '../api/exercisesApi';
import youtubeApi from '../api/youtubeApi';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseData = await fetchData(exercisesApi, `exercise/${id}`);
      setExerciseDetail(exerciseData.data);

      const exerciseVideosData = await fetchData(youtubeApi, '/search', {
        params: { query: exerciseData.data.name }
      });
        setExerciseVideos(exerciseVideosData.data.contents);
    }

    fetchExerciseData();
  }, [id])
  return (
    <Box>
      <Details exercise={exerciseDetail}/>
      <ExerciseVideos videos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails
