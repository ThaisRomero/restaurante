import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import OsChefs from "./components/OsChefs/OsChefs";
import Cardapio from "./components/Cardapio/Cardapio";
import Reservas from "./components/Reservas/Reservas";
import Delivery from "./components/Delivery/Categorias/Delivery";
import Footer from "./components/Footer/Footer";
import ItensCardapio from "./components/Delivery/ItensCardapio/ItensCardapio";
import Cart from "./components/Delivery/Cart/Cart";
import { useState } from "react";

// import vetorNav from './assets/Images/nav_vetor.png'

function App() {
  const [countItens, setCountItens] = useState(0);
  function changeValueItensCountKart() {
    if (countItens) setCountItens(false);
    else setCountItens(true);
  }
  return (
    <div className="App">
      <NavBar countItens={countItens} />

      <Routes>
        {/* path é o que irá conter após a barra na URL */}
        <Route element={<Home />} path="/" />
        <Route element={<OsChefs />} path="/chefs" />
        <Route element={<Cardapio />} path="/cardapio" />
        <Route element={<Reservas />} path="/reservas" />
        <Route element={<Delivery />} path="/delivery" />
        <Route
          element={<ItensCardapio count={changeValueItensCountKart} />}
          path="/delivery/produtos/:category"
        />
        <Route
          element={<Cart count={changeValueItensCountKart} />}
          path="/delivery/carrinho"
        />
        <Route element={<div />} path="/contato" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
