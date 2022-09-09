import React from 'react';
import Header from "./Header";
import InfoCard from "./InfoCard";

const nutritionCard = {
    content: 'Want to know how to calculate your macros? Ever wondered how much protein and carbs you should eat?',
    imgUrl: 'https://i.ibb.co/jJ9pkTB/nutrition.png',
    imgAlt: 'nutrition icon',
    style: 'card-container1'
}

const workoutCard = {
    content: 'Come to workout',
    imgUrl: 'https://i.ibb.co/y5DMsyy/workout-icon.png',
    imgAlt: 'workout icon',
    style: 'card-container2'
}

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className='info-cards'>
                <InfoCard title='Nutrition' content={nutritionCard.content} imgUrl={nutritionCard.imgUrl}
                    imgAlt={nutritionCard.imgAlt} style={nutritionCard.style} />
                <InfoCard title='Workout' content={workoutCard.content} imgUrl={workoutCard.imgUrl}
                    imgAlt={workoutCard.imgAlt} style={workoutCard.style} />
            </div>
        </div>
    )
}
