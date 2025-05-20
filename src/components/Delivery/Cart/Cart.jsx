import React from "react";
import "./Cart.css";
import itens from "../../../mocks/Products";
import { DeleteOutlined } from "@ant-design/icons";

const Cart = ({ count }) => {
  const listProducts = [];
  let totalValues = 0;
  itens.forEach((item) => {
    if (localStorage.getItem(item.id)) {
      const itenStorage = JSON.parse(localStorage.getItem(item.id));
      totalValues = totalValues + itenStorage.price * itenStorage.count;
      listProducts.push(itenStorage);
    }
  });

  function deleteKart() {
    itens.forEach((item) => {
      localStorage.removeItem(item.id);
    });
    count();
  }

  function deleteItem(item) {
    localStorage.removeItem(item.id);

    count();
  }

  return (
    <div>
      <div className="page-cart">
        <div className="container-cart">
          <div className="itens-in-cart">
            <h1>Itens adicionados ao carrinho</h1>
            {listProducts.map((product, index) => {
              return (
                <div className="item-choose" key={product.name + index}>
                  <div className="img-choose">
                    <img src={product.img} alt="food" />
                  </div>
                  <div className="dates-choose">
                    <div className="content-choose">
                      <h2>{product.name}</h2>
                    </div>
                    <div className="price-choose">
                      <p>Valor: R${product.price.toFixed(2)}</p>
                      <p>Quantidade: {product.count}</p>
                      <p>
                        <b>
                          Total: R${(product.count * product.price).toFixed(2)}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="delete-item">
                    <DeleteOutlined onClick={() => deleteItem(product)} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box-right">
            <h1>Resumo do pedido</h1>
            <div className="box-count">
              {!listProducts.length ? (
                <div>
                  <p>Carrinho vazio!</p>
                </div>
              ) : (
                <div>
                  <p className="count-result">
                    <b>Valor Total:</b> R${totalValues.toFixed(2)}
                  </p>
                  <p>
                    <b>Formas de pagamento:</b>
                  </p>
                  <div className="pay">
                    <div className="debito">
                      <div className="card-debito card-pay"></div>
                      <p>Débito</p>
                    </div>
                    <div className="credito">
                      <div className="card-credito card-pay"></div>
                      <p>Credito</p>
                    </div>
                    <div className="dinheiro">
                      <div className="card-dinheiro card-pay"></div>
                      <p>Dinheiro</p>
                    </div>
                    <div className="pix">
                      <div className="card-pix card-pay"></div>
                      <p>Pix</p>
                    </div>
                  </div>
                  <div className="address">
                    <p>
                      <b>Endereço de entrega:</b>
                    </p>
                    <p>Rua:</p>
                    <input type="text" name="nome" />
                  </div>
                  <button onClick={deleteKart}>Limpar carrinho</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
