import { useNavigate } from "react-router-dom";
import React from "react";
import mobile from "../img/mobile.png";
import goblet from "../img/gobletcoca.png";
import frite from "../img/friteMacdo.png";
import friteSol from "../img/solfrite.png";
import fritecolalogo from "../img/fritecolalogo.png";
import space from "../img/space.png";
import Video from "./Video";

function Main() {
  const navigate = useNavigate();
  return (
    <div
      className="main_container"
      style={{ backgroundImage: `url(${space})` }}
    >
      <div className="logo-container">
        <img src={fritecolalogo} alt="" />
      </div>

      <div className="allfresque">
        <div className="fresqueBase">
          <img className="goblet_one" src={goblet} alt="" />
          <img className="frite_one" src={frite} alt="" />
          <img className="mobile" src={mobile} alt="" />
          <div className="video-container">
            <Video />
          </div>
          <img className="frite_two" src={frite} alt="" />
          <img className="goblet_two" src={goblet} alt="" />
          <img className="frite-sol" src={friteSol} alt="" />{" "}
        </div>{" "}
      </div>
      <div className="button_container">
        <button onClick={() => navigate("/home")}>Entrer</button>
      </div>
    </div>
  );
}

export default Main;
