import React from "react";
import "./components.css";

const Category = props => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          let basketItemsCopy = [...props.basketItems];

          let same = false;

          for (let j = 0; j < basketItemsCopy.length; j++) {
            if (
              basketItemsCopy[j].title == props.element.meals[props.index].title
            ) {
              same = true;
              basketItemsCopy[j].qty++;
              props.setBasketItems(basketItemsCopy);
            }
          }

          if (same == false) {
            basketItemsCopy.push({
              qty: 1,
              title: props.title,
              price: props.price
            });
            props.setBasketItems(basketItemsCopy);
          }
        }}
      >
        <div className="collection-flex">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <div className="flex-items">
            <div>{props.price} </div>
            {props.popular === true && (
              <div>
                <span class="margin-left text-green"> Populaire</span>
              </div>
            )}
          </div>
        </div>
        <div className="card-image">
          <img class="img" src={props.picture} />
        </div>
      </div>
    </>
  );
};

export default Category;
