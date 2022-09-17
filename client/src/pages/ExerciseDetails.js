import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData } from '../utils/fetchData'
import exercisesApi from '../api/exercisesApi';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseData = await fetchData(exercisesApi, `exercise/${id}`);

      setExerciseDetail(exerciseData.data);
      console.log(exerciseData);
    }

    fetchExerciseData();
  }, [id])
  return (
    <Box>
      <Details exercise={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails
