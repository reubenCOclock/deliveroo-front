import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu";
import Category from "./components/Category";
import Header from "./components/Header";
import Basket from "./components/Basket";

function App() {
  console.log("Push with no access rights");
  console.log("Push with correct access rights");
  const [restaurauntData, setRestaurauntData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    let getData = async () => {
      const data = await axios.get(
        "https://deliveroo-backend-rc.herokuapp.com/"
      );
      setRestaurauntData(data);
      setIsLoading(true);
    };

    getData();
  }, []);
  if (isLoading == true) {
    //console.log(restaurauntData.data);
  }
  return (
    <>
      {isLoading === true && (
        <div className="bg-white">
          <div className="container">
            <Header restarauntName={restaurauntData.data.restaurant.name} />
          </div>
        </div>
      )}
      <div className="container">
        <div className="flex-items">
          <div className="flex-left">
            {isLoading === false ? <div> Data Loading</div> : <span></span>}
            {isLoading === true && (
              <>
                <Menu
                  array={restaurauntData.data.categories}
                  basketItems={basketItems}
                  setBasketItems={setBasketItems}
                />
              </>
            )}
          </div>
          <div className="flex-right">
            <Basket
              basketArray={basketItems}
              setBasketArrayItems={setBasketItems}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
