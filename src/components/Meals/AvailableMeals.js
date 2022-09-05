import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    description: "Twisted knobs of dough, stuffed with meat and spices.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Khachapuri",
    description: "Traditional Georgian dish of cheese-filled bread. ",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Chaqapuli",
    description: "Popular Georgian stew made with lamb.",
    price: 19.99,
  },
  {
    id: "m4",
    name: "Lobiani",
    description: "Traditional Georgian dish of bean-filled bread.",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
