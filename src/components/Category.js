import React from "react";
import "./components.css";

const Category = props => {
  return (
    <>
      <div className="card">
        <div className="collection-flex">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <div className="flex-items">
            <div>{props.price} </div>
            {props.popular === true && (
              <div>
                <span class="margin-left"> Populaire</span>
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
