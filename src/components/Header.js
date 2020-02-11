import React from "react";
import logo from "./deliveroo.png";

const Header = props => {
  return (
    <>
      <img class="logo" src={logo} />
      <div class="flex-items">
        <div class="flex-2-header">
          <h2> {props.restarauntName}</h2>
          <p>
            Profitez de chaque plaisir de la vie quotidienne. Le pain quotidien
            propose des ingredients simples et sains,du bon pain, des fruits et
            des legumes frais issus de sasions
          </p>
        </div>

        <div className="flex-1-header">
          <div className="bg-image"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
