import React from "react";
import { tshirt } from "../data";
import space from '../img/headerspace.jpg';
import frite from '../img/frite.png';
import cola from '../img/cola.png';

// Créer un objet pour mapper les noms d'images aux chemins dans public/
const imageMap = {
  logoT: 'merchimg/logoT.png',
  coverlp: 'merchimg/coverlp.png',
  dent: 'merchimg/dent.png',
  Tous: 'merchimg/Tous.png',
  face1: 'merchimg/face1.png',
  face2: 'merchimg/face2.png',
  face3: 'merchimg/face3.png',
  face4: 'merchimg/face4.png',
  face5: 'merchimg/face5.png',
  cadi: 'merchimg/cadi.png',
  maejeune: 'merchimg/maejeune.png',
  tonyjeune: 'merchimg/tonyjeune.png',
  chrisbiere: 'merchimg/chrisbiere.png',
  mac: 'merchimg/mac.png',
  mac2: 'merchimg/mac2.png',
  maemac: 'merchimg/maemac.png',
  jesus: 'merchimg/jesus.png',
  maehot: 'merchimg/maehot.png',
  tonyveuch: 'merchimg/tonyveuch.png',
  chrispepere: 'merchimg/chrispepere.png',
  randypepere: 'merchimg/randypepere.png',
  randypepere2: 'merchimg/randypepere2.png',
  chrisdog: 'merchimg/chrisdog.png',
  chrisdort: 'merchimg/chrisdort.png',
  maetoit: 'merchimg/maetoit.png',
  skate: 'merchimg/skate.png',
  randysmile: 'merchimg/randysmile.png',
  tonybizar: 'merchimg/tonybizar.png',
  capote: 'merchimg/capote.png',
};

function Merch() {
  return (
    <div className="merch-container" style={{ backgroundImage: `url(${space})` }}>
      <div className="introduc">
      <img src="/merchimg/logoT.png" alt="logoT" />
        <h1>Produits officiels Frite Cola Electrique </h1>
        <p>Nos meilleurs produit aux couleurs de votre groupe préféré!</p>
      </div>
      <div className="product-container">
        {tshirt?.length > 0 &&
          tshirt.map((elem, key) => {
            // Récupérer l'image correspondante depuis l'objet imageMap
            const image = imageMap[elem.img];

            return (
              <div className="fiche" key={key}>
                <div className="img-container">
                  <img
                    className={elem.img === "capote" ? "capote-img" : "imgt"}
                    src={image}
                    alt="merch"
                  />
                </div>
                <div className="description">
                  <h2>{elem.name}</h2>
                  <p className="comment">{elem.comment}</p>
                  <span className="price-container">
                    <img className="frite" src={frite} alt="frite" />
                    <p className="price">{elem.price}</p>
                    <img className="cola" src={cola} alt="cola" />
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Merch;
