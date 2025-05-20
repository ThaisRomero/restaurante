import "./ItensCardapio.css";
import { useParams } from "react-router-dom";
import itens from "../../../mocks/Products";
import ItemBox from "./ItemBox/ItemBox";

const ItensCardapio = ({ count }) => {
  const { category } = useParams();
  const listProducts = itens.filter(
    (item) => item.category === category.toLowerCase()
  );

  return (
    <div>
      <div className="page-itens">
        <div className="box-bg">
          <div className="info-container">
            <div className="box-infos">
              <h1>Carnes</h1>
              <h2>Sabores irresistíveis para os amantes de carne.</h2>
            </div>
          </div>
          <div className="container-itens-box">
            {listProducts.map((product) => {
              return (
                <div key={product.name}>
                  <ItemBox product={product} countKart={count} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItensCardapio;
