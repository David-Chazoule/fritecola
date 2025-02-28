import React from "react";
import cover from "../img/cover.png";
import space from "../img/headerspace.jpg";
function Home() {
  return (
    <div
      className="home_container"
      style={{ backgroundImage: `url(${space})` }}
    >
      <div className="intro">
        <h1>FRITE COLA ÉLECTRIQUE – L'ALBUM</h1>
        <p>
          Bienvenue sur la page officielle de Frite Cola Électrique, le groupe
          qui fusionne les sons rétro-futuristes du synthpop avec l’énergie
          brute du rock indie et la sensibilité mélodique de la pop alternative.
          Un mélange unique, à la fois électrisant et nostalgique, qui vous
          plonge dans un voyage sonore entre néons fluo et ciel étoilé.
        </p>
      </div>

      <div className="lp">
        <img src={cover} alt="" />
        <div className="tracklist">
          <h2>Tracklist</h2>
          <p>01 - Frite Cola Electrique</p>
          <p>02 - Mac Donalds</p>
          <p>03 - Dur de l'oreille </p>
          <p>04 - Ouille</p>
          <p>05 - Citadelle</p>
          <p>06 - J'ai Faim</p>
          <p>07 - La montagne</p>
          <p>08 - Bobo</p>
          <p>09 - Mon Pote</p>
          <p>10 - Queuleuleu</p>
          <p>11 - Christophe le conquérant</p>
          <p>12 - Je me barre</p>
          <p>13 - Je suis Cool</p>
          <p>14</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
