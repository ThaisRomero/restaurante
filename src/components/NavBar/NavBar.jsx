import React, { useEffect, useState } from "react";
import vetorNav from "../../assets/Images/nav_vetor.png";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import itens from "../../mocks/Products";

const NavBar = ({ countItens }) => {
  const navigate = useNavigate();
  const [totalItens, setTotalItens] = useState(0);
  function toCart() {
    navigate("../delivery/carrinho"); //caminho definito na rota no App
  }

  useEffect(() => {
    let total = 0;
    itens.forEach((item) => {
      const itemStorage = JSON.parse(localStorage.getItem(item.id));
      if (localStorage.getItem(item.id)) total = total + itemStorage.count;
    });
    setTotalItens(total);
  }, [countItens]);
  return (
    <div>
      <header className="App-header">
        <div id="menu-itens">
          <div id="branch">
            <img id="vetor" src={vetorNav} alt="vetor" />
            <p>Encanto Gastronomia</p>
          </div>
          <nav className="box-nav">
            <ul id="menu">
              <li>
                <Link className="link-navigate" to="/">
                  {" "}
                  Início
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/chefs">
                  {" "}
                  Os Chefs
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/cardapio">
                  {" "}
                  Cardápio
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/reservas">
                  {" "}
                  Reservas
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/delivery">
                  {" "}
                  Delivery
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <div className="logon-cart">
            <div className="logon">
              <form className="login-form">
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="name" type="text" />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Senha</label>
                  <input id="password" name="password" type="password" />
                </div>
                <button className="submit-button" type="submit">
                  Entrar
                </button>
              </form>
            </div>
            <Badge count={totalItens} showZero>
              <ShoppingCartOutlined onClick={toCart} />
            </Badge>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
