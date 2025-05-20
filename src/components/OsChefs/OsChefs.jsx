import React from "react";
import "./OsChefs.css";
import Chef1 from "../../assets/Images/chefe1.jpeg";
import Chef2 from "../../assets/Images/chefe2.jpg";

const OsChefs = () => {
  const itens = [
    {
      name: "Wagner",
      description: (
        <div>
          <p>
            Em uma pequena cidade costeira, vivia um chefe de cozinha chamado
            Wagner, conhecido por sua habilidade em transformar ingredientes
            simples em pratos extraordinários. Desde jovem, ele tinha uma paixão
            por culinária, herdada de sua avó, que o ensinara a colher ervas
            frescas do jardim para preparar receitas que encantavam todos ao
            redor.{" "}
          </p>
          <br />
          <p>
            Sua fama se espalhou rapidamente, atraindo visitantes de diversas
            partes do mundo. O que mais encantava era o carinho e a dedicação
            com que Wagner preparava cada prato. Cada refeição era uma obra de
            arte, e o mais famoso de seus pratos, o "Risoto de Camarão ao Limão
            Siciliano", se tornou um símbolo de sua cozinha única.
          </p>
          <br />
          <p>
            Mas Wagner não se via como um simples chef. Ele acreditava que a
            comida tinha o poder de unir as pessoas e transmitir emoções. Para
            ele, o maior sucesso era ver os sorrisos satisfeitos de seus
            clientes e ouvir histórias sobre como seu restaurante havia criado
            memórias inesquecíveis.
          </p>
          <br />
          <p>
            Wagner nunca perdeu a essência de sua cozinha acolhedora e
            apaixonada. Ele continuava a colhendo as ervas do jardim da avó e
            criando pratos que emocionavam. O restaurante se tornou um lugar
            onde a gastronomia e o afeto se encontravam, e Wagner, o chef que
            entendia que cozinhar era, antes de tudo, uma forma de amar.
          </p>
        </div>
      ),
      img: Chef1,
      alt: "fotoChefe1",
    },

    {
      name: "Guilherme",
      description: (
        <div>
          <p>
            Guilherme não tinha uma história comum. Nascido em uma família
            humilde, ele cresceu em um bairro onde a comida era simples e a
            vida, difícil. Sua mãe, uma cozinheira apaixonada, sempre dizia que
            a culinária era uma arte que podia transformar qualquer momento em
            algo especial. Samuel, aos poucos, foi se apaixonando por esse
            mundo, observando sua mãe enquanto ela preparava pratos rústicos e
            cheios de sabor.
          </p>
          <br />
          <p>
            Após anos de treinamento, Guilherme viajou pelo mundo, buscando as
            receitas e ingredientes mais exóticos. Ele se encantou pela
            gastronomia de diferentes culturas e retornou à sua cidade com uma
            missão: transformar o simples em sublime. Para ele, a comida deveria
            ser uma viagem de sabores, uma história contada por cada prato, cada
            ingrediente.
          </p>
          <br />
          <p>
            Seus pratos não eram apenas refeições, mas uma imersão em suas
            viagens e descobertas. Um de seus mais famosos pratos era o "Salmão
            ao Molho de Maracujá e Pimenta Rosa", uma fusão de ingredientes
            tropicais com toques delicados de tempero, que deixavam os clientes
            hipnotizados. A combinação de frutas e especiarias raras não só
            conquistava o paladar, mas também despertava memórias de lugares
            distantes.
          </p>
        </div>
      ),
      img: Chef2,
      alt: "fotoChefe2",
    },
  ];

  return (
    <div>
      <div className="chefs-content">
        <h1>Os Chefes</h1>
        {itens.map((item, index) => {
          return (
            <div
              key={index}
              className={index % 2 === 0 ? "chef-left" : "chef-right"}>
              {index % 2 === 0 && (
                <img
                  src={item.img}
                  alt={item.alt}
                  className="margin-right-img"
                />
              )}
              <div>
                <h2>{item.name}</h2>
                {item.description}
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
  );
};

export default OsChefs;
