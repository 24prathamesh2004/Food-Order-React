import React from 'react';
import MealItem from './MealItem.jsx';
import meals from './MealData.list'


export default function Meals() {
  return (
    <ul id="meals">
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
