import React from 'react';

let bmrInfo = {
    title: 'BMR',
    content: 'Basal metabolic rate is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.',
    url: 'https://www.healthline.com/health/what-is-basal-metabolic-rate'
}

let bmiInfo = {
    title: 'BMI',
    content: 'Body mass index (BMI) is an estimate of body fat based on height and weight. It doesn’t measure body fat directly, but instead uses an equation to make an approximation. BMI can help determine whether a person is at an unhealthy or healthy weight.',
    url: 'https://www.healthline.com/health/body-mass-index'
}

function CalculatorInfo(props) {

    const title = props.option === 'bmr' ? bmrInfo.title : bmiInfo.title;
    const content = props.option === 'bmr' ? bmrInfo.content : bmiInfo.content;
    const url = props.option === 'bmr' ? bmrInfo.url : bmiInfo.url;

    return (
        <div>
            <h1>What is The {title}?</h1>
            <p>{content}</p>
            <a href={url} target='_blank' rel="noopener noreferrer"><p>Find out more.</p></a>
            <h4>Calculate your {title}:</h4>
        </div>
    )
}

export default CalculatorInfo
