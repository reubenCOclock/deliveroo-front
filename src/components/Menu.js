import React from "react";
import "./components.css";
import Category from "./Category";

const Menu = props => {
  return (
    <div className="background-gray">
      {props.array.map(function(element, index) {
        if (element.meals.length > 0) {
          return (
            <div>
              <h4 className="category-title"> {element.name}</h4>
              <div class="flex-card-items">
                {element.meals.map(function(meal, index) {
                  return (
                    <Category
                      title={meal.title}
                      description={meal.description.substring(0, 50)}
                      price={meal.price}
                      popular={meal.popular}
                      picture={meal.picture}
                    />
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
