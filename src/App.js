import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
  const [restaurauntData, setRestaurauntData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    console.log(restaurauntData.data);
  }
  return (
    <>
      <div className="container">
        {isLoading === true && (
          <Header restarauntName={restaurauntData.data.restaurant.name} />
        )}
        <div className="flex-items">
          <div className="flex-left">
            {isLoading === false ? <div> Data Loading</div> : <span></span>}
            {isLoading === true && (
              <>
                <Menu array={restaurauntData.data.categories} />
              </>
            )}
          </div>
          <div className="flex-right"></div>
        </div>
      </div>
    </>
  );
}

export default App;
