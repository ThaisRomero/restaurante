import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons";
import { Alert } from "antd";
import React, { useState } from "react";

const ItemBox = ({ product, countKart }) => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  function countItensAdd() {
    setCount(count + 1);
  }
  function countItensSub() {
    if (count > 0) return setCount(count - 1);
  }

  function addToCart() {
    countKart();
    localStorage.setItem(
      product.id,
      JSON.stringify({
        img: product.img,
        name: product.name,
        price: product.price,
        count: count,
        id: product.id,
      })
    );
    setShowAlert(true);
    setInterval(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <div>
      <div className="item-box" key={product.name}>
        <div className="item-img">
          <img src={product.img} alt="" />
        </div>
        <div className="box-content">
          <div className="name-item">
            <h3>{product.name}</h3>
          </div>
          <div className="description-item">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="price">
          <p>R${product.price.toFixed(2)}</p>
        </div>
        <div className="all-cart">
          <div className="box-cart">
            <div className="option-add-cart">
              <div className="buttons button-left">
                <LeftSquareFilled onClick={() => countItensSub()} />
              </div>
              <div className="amount">
                <p>{count}</p>
              </div>
              <div className=" buttons button-right">
                <RightSquareFilled onClick={() => countItensAdd()} />
              </div>
            </div>
            <div className={count <= 0 ? "disable-button" : "add-cart"}>
              <button disabled={count <= 0} onClick={() => addToCart()}>
                Adicionar ao carrinho
              </button>
              {showAlert && (
                <Alert
                  message="Produto Adicionado ao Carrinho!"
                  type="success"
                  showIcon
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
