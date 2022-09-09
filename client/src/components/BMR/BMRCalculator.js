import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BMRCalculator() {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('0');

    function calculateBMR(e) {
        e.preventDefault();
        let bmr;
        if(gender === 'male') {
            bmr = 66 + (13.7 * parseInt(weight)) + (5 * parseInt(height)) - (6.8 * parseInt(age)); 
        } else if (gender ==='female') {
            bmr = 655 + (9.6 * parseInt(weight)) + (1.8 * parseInt(height)) - (4.7 * parseInt(age));
        }
        setResult(Math.floor(bmr));
    }
    return (
        <div className='bmr-calculator'>
            <h1>What is BMR?</h1>
            <p>Basal metabolic rate is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.</p>
            <a href='https://www.healthline.com/health/what-is-basal-metabolic-rate' target='_blank' rel="noopener noreferrer"><p>Find out more.</p></a>
            <h4>Calculate your BMR:</h4>
            <Form className='container' onSubmit={(e) => calculateBMR(e)}>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" 
                    value={age} onChange={(e) => setAge(e.target.value)} 
                    min={15} max={80} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Gender: &nbsp; &nbsp;</Form.Label>
                    <Form.Check inline type="radio" name='gender' label="Male" 
                    onClick={() => setGender('male')} required/>
                    <Form.Check inline type="radio" name='gender' label="Female" 
                    onClick={() => setGender('female')} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHeight">
                    <Form.Label>Height (CM):</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height..." 
                    value={height} onChange={(e) => setHeight(e.target.value)} required 
                    min={70} max={250}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formWeight">
                    <Form.Label>Weight (KGs):</Form.Label>
                    <Form.Control type="number" placeholder="Enter your weight..." 
                    value={weight} onChange={(e) => setWeight(e.target.value)} required 
                    min={20} max={200}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>
            <div className='result-container'>
                <h3>RESULT:</h3>
                <p>{result} calories</p>
            </div>
        </div>
    )
}
