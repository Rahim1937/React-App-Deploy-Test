import React from 'react';
import './Meal.css';

const Players = (props) => {
    // console.log(props)
    const {meal, handelButton} = props;
    const {strMealThumb, strMeal, idMeal} = meal;
    return (
        <div className='meal-cart-contaner'>
            <img className='meal-img' src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{idMeal}</p>
            <button onClick={()=> handelButton(idMeal)} className='meal-cart'>Add To Cart</button>
        </div>
    );
};

export default Players;