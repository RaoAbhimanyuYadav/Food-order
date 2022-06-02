import React, { Fragment } from "react";
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <main>
        <MealsAvailable />
      </main>
    </Fragment>
  );
};

export default Meals;
