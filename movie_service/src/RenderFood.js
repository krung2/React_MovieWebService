import React from 'react';
import Food from './Potato';

function RenderFood(dish) {
    return <Food name={dish.name} img={dish.image} />
}

export default RenderFood;