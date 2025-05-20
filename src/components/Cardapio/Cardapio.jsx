import React from "react";
import "./Cardapio.css";
import itens from "../../mocks/Products.js";

const Cardapio = () => {
  return (
    <div>
      <div className="cardapio-content">
        <div className="containerFood">
          <h1>Cardápio</h1>

          <div className="foodCategory">
            <h2>Carnes</h2>
          </div>
          <div className="space"></div>
          {itens
            .filter((food) => food.category === "carnes")
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 === 0 ? "align-left" : "align-right"}>
                  {index % 2 === 0 && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-right-img"
                    />
                  )}
                  <div>
                    <h3>{item.name}</h3>
                    <br />
                    <p>{item.description}</p>
                  </div>
                  {!(index % 2 === 0) && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-left-img"
                    />
                  )}
                </div>
              );
            })}

          <div className="foodCategory">
            <h2>Do Mar</h2>
          </div>
          <div className="space"></div>
          {itens
            .filter((food) => food.category === "doMar")
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 === 0 ? "align-left" : "align-right"}>
                  {index % 2 === 0 && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-right-img"
                    />
                  )}
                  <div>
                    <h3>{item.name}</h3>
                    <br />
                    <p>{item.description}</p>
                  </div>
                  {!(index % 2 === 0) && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-left-img"
                    />
                  )}
                </div>
              );
            })}

          <div className="foodCategory">
            <h2>Vegetariano</h2>
          </div>
          <div className="space"></div>
          {itens
            .filter((food) => food.category === "vegetariano")
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 === 0 ? "align-left" : "align-right"}>
                  {index % 2 === 0 && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-right-img"
                    />
                  )}
                  <div>
                    <h3>{item.name}</h3>
                    <br />
                    <p>{item.description}</p>
                  </div>
                  {!(index % 2 === 0) && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-left-img"
                    />
                  )}
                </div>
              );
            })}

          <div className="foodCategory">
            <h2>Sobremesas</h2>
          </div>
          <div className="space"></div>
          {itens
            .filter((food) => food.category === "sobremesas")
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 === 0 ? "align-left" : "align-right"}>
                  {index % 2 === 0 && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-right-img"
                    />
                  )}
                  <div>
                    <h3>{item.name}</h3>
                    <br />
                    <p>{item.description}</p>
                  </div>
                  {!(index % 2 === 0) && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="margin-left-img"
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
