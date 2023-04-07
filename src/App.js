import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  //https://fakestoreapi.com/products/
  const [fake, setFake] = useState([]);
  console.log(fake);

  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setFake(data);
  };

  return (
    <>
      <h2>Fake API Store</h2>
      <div className="container">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                <img src={values.image} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
