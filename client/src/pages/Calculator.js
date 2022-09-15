import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CalculatorInfo from '../components/CalculatorInfo';

export default function Calculator(props) {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('0');

    function calculate(e) {
        e.preventDefault();

        if (props.option === 'bmr') {
            let bmr;
            if (gender === 'male') {
                bmr = 66 + (13.7 * parseInt(weight)) + (5 * parseInt(height)) - (6.8 * parseInt(age));
            } else if (gender === 'female') {
                bmr = 655 + (9.6 * parseInt(weight)) + (1.8 * parseInt(height)) - (4.7 * parseInt(age));
            }
            setResult(Math.floor(bmr) + ' calories');
        } else if (props.option === 'bmi') {
            let bmi = parseInt(weight) / (parseInt(height) / 100) ** 2;
            setResult(bmi.toFixed(1));
        }
    }

    return (
        <>
            <CalculatorInfo option={props.option}/>
            <div className='bmr-calculator'>
                <Form className='container' onSubmit={(e) => calculate(e)}>
                    <Form.Group className="mb-3" controlId="formAge">
                        <Form.Label>Age:</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age"
                            value={age} onChange={(e) => setAge(e.target.value)}
                            min={15} max={80} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label>Gender: &nbsp; &nbsp;</Form.Label>
                        <Form.Check inline type="radio" name='gender' label="Male"
                            onClick={() => setGender('male')} required />
                        <Form.Check inline type="radio" name='gender' label="Female"
                            onClick={() => setGender('female')} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formHeight">
                        <Form.Label>Height (CM):</Form.Label>
                        <Form.Control type="number" placeholder="Enter your height..."
                            value={height} onChange={(e) => setHeight(e.target.value)} required
                            min={70} max={250} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formWeight">
                        <Form.Label>Weight (KGs):</Form.Label>
                        <Form.Control type="number" placeholder="Enter your weight..."
                            value={weight} onChange={(e) => setWeight(e.target.value)} required
                            min={20} max={200} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>
                <div className='result-container'>
                    <h3>RESULT:</h3>
                    <p>{result}</p>
                </div>
            </div>
        </>
    )
}
