import React from "react";
import { tshirt } from "../data";
import space from '../img/headerspace.jpg';
import frite from '../img/frite.png';
import cola from '../img/cola.png'
function Merch() {
  return (
    <div className="merch-container" style={{ backgroundImage: `url(${space})` }}>
      <div className="introduc">
        <h1>Produits officiels Frite Cola Electrique </h1>
        <p>Nos meilleurs produit aux couleurs de votre groupe préféré!</p>
      </div>
      <div className="product-container">
      {tshirt?.length > 0 &&
        tshirt.map((elem, key) => (
          <div className="fiche" key={key}>
            <div className="img-container">
              <img className={elem.img==="capote"?"capote-img":"imgt"} src={`/merch/${elem.img}.png`} alt="merch" />
              </div>
              <div className="description">
                <h2>{elem.name}</h2>
                <p className="comment">{elem.comment}</p>
               <span className="price-container">
                <img className="frite" src={frite} alt="frite"/>
               <p className="price">{elem.price}</p>
               <img className="cola" src={cola} alt="frite"/>
               </span>
                
              
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Merch;
