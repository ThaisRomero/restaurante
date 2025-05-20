import React from "react";
import "./Reservas.css";
import { Modal } from "antd";

const Reservas = () => {
  const success = (e) => {
    e.preventDefault();
    Modal.success({
      content: "Reserva agendada!",
    });
  };

  return (
    <div>
      <div className="content">
        <div id="container">
          <h1>Faça sua reserva!</h1>
          <form action="" method="get" className="formulario">
            <div id="form1">
              <div id="name-content">
                <label htmlFor="name">Nome: </label>
                <br />
                <input type="text" id="name" />
              </div>

              <div id="phone-content">
                <label htmlFor="phone">Telefone: </label>
                <br />
                <input type="tel" id="phone" />
              </div>

              <div id="mail-content">
                <label htmlFor="mail">E-mail: </label>
                <br />
                <input type="email" id="mail" />
              </div>
            </div>
            <div id="form2">
              <div id="date-content">
                <label htmlFor="date">Data: </label>
                <br />
                <input type="date" id="date" />
              </div>

              <div id="time-content">
                <label htmlFor="hours">Horário: </label>
                <br />
                <input type="time" id="hours" />
              </div>
              <div id="desks-content">
                <label htmlFor="desks">Assentos: </label>
                <br />
                <input type="number" id="desks" />
              </div>
            </div>
            <div className="buttonEnviar">
              <button className="enviar" onClick={success}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
