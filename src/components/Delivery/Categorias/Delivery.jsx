import React from "react";
import "./Delivery.css";
import itens from "../../../mocks/Categories";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
  const navigate = useNavigate();
  function navigateToProducts(type) {
    navigate(`/delivery/produtos/${type}`);
  }

  return (
    <div>
      <div className="delivery-content">
        <div className="box-page">
          <div className="intro">
            <h1>Delivery</h1>
            <h2>
              Encontre os melhores pratos e bebidas selecionando as categorias
              do nosso menu
            </h2>
          </div>
          <div className="all-category">
            <div className="item-category">
              {itens.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="box"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "100% 100%",
                    }}
                    onClick={() => navigateToProducts(item.category)}>
                    <h3>{item.category}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
