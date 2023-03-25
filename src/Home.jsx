import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import "./Card.css";
import "./home.css";
import Logo from "./assets/logodnc.png";

const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <h1>Lista de Tarefas</h1>
      </nav>
      <section className="container">
        <div className="card">
          <Card1 />
        </div>

        <Card2 />
        <Card3 />
        <Card4 />
      </section>
    </>
  );
};

export default Home;
