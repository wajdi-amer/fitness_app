import React, { useState } from 'react';
import nutrition from '../api/nutrition';
import { fetchData } from '../utils/fetchData';

// TODO: state management, page styling, alert message styling

export default function Nutrition() {
    const [food, setFood] = useState('');
    const [foodName, setFoodName] = useState('');
    const [foodSize, setFoodSize] = useState('');
    const [foodCalories, setFoodCalories] = useState('');
    const [foodFats, setFoodFats] = useState('');
    const [foodSaturatedFats, setFoodSaturatedFats] = useState('');
    const [foodSodium, setFoodSodium] = useState('');
    const [foodCarbs, setFoodCarbs] = useState('');
    const [foodFibers, setFoodFibers] = useState('');
    const [foodSugars, setFoodSugars] = useState('');
    const [foodProtein, setFoodProtein] = useState('');

    async function getNutritionFacts(foodToSearch) {
        if (food) {
            try {
                const results = await fetchData(nutrition, '/v1/nutrition', {
                    params: { query: foodToSearch }
                })
                setFoodName(results.data[0].name.charAt(0).toUpperCase() + results.data[0].name.slice(1));
                setFoodSize(results.data[0].serving_size_g);
                setFoodCalories(results.data[0].calories);
                setFoodSize(results.data[0].serving_size_g);
                setFoodFats(results.data[0].fat_total_g);
                setFoodSaturatedFats(results.data[0].fat_saturated_g);
                setFoodSodium(results.data[0].sodium_mg);
                setFoodCarbs(results.data[0].carbohydrates_total_g);
                setFoodFibers(results.data[0].fiber_g);
                setFoodSugars(results.data[0].sugar_g);
                setFoodProtein(results.data[0].protein_g);

                console.log(results);
            } catch (error) {
                console.log(error.message);
                alert('Please write an existing food name...')
            }
        }
    }

    return (
        <div>
            <input type='text' onChange={(e) => setFood(e.target.value)} value={food} />
            <button onClick={() => getNutritionFacts(food)}> Click Me</button>
            <div className='container'>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>{foodName}</td>
                    </tr>
                    <tr>
                        <th>Serving Size</th>
                        <td>{foodSize}(g)</td>
                    </tr>
                    <tr>
                        <th>Calories</th>
                        <td>{foodCalories}</td>
                    </tr>
                    <tr>
                        <th>Total Fat</th>
                        <td>{foodFats}(g)</td>
                    </tr>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;Saturated Fat</td>
                        <td>{foodSaturatedFats}</td>
                    </tr>
                    <tr>
                        <th>Sodium</th>
                        <td>{foodSodium}</td>
                    </tr>
                    <tr>
                        <th>Total Carbohydrates</th>
                        <td>{foodCarbs}</td>
                    </tr>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;Dietary Fiber</td>
                        <td>{foodFibers}</td>
                    </tr>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;Sugars</td>
                        <td>{foodSugars}</td>
                    </tr>
                    <tr>
                        <th>Protein</th>
                        <td>{foodProtein}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
