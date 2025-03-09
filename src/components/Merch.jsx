import React from "react";
import { tshirt } from "../data";
import space from '../img/headerspace.jpg';
import frite from '../img/frite.png';
import cola from '../img/cola.png';

// Créer un objet pour mapper les noms d'images aux chemins dans public/
const imageMap = {
  logoT: '/merch/logoT.png',
  coverlp: '/merch/coverlp.png',
  dent: '/merch/dent.png',
  Tous: '/merch/Tous.png',
  face1: '/merch/face1.png',
  face2: '/merch/face2.png',
  face3: '/merch/face3.png',
  face4: '/merch/face4.png',
  face5: '/merch/face5.png',
  cadi: '/merch/cadi.png',
  maejeune: '/merch/maejeune.png',
  tonyjeune: '/merch/tonyjeune.png',
  chrisbiere: '/merch/chrisbiere.png',
  mac: '/merch/mac.png',
  mac2: '/merch/mac2.png',
  maemac: '/merch/maemac.png',
  jesus: '/merch/jesus.png',
  maehot: '/merch/maehot.png',
  tonyveuch: '/merch/tonyveuch.png',
  chrispepere: '/merch/chrispepere.png',
  randypepere: '/merch/randypepere.png',
  randypepere2: '/merch/randypepere2.png',
  chrisdog: '/merch/chrisdog.png',
  chrisdort: '/merch/chrisdort.png',
  maetoit: '/merch/maetoit.png',
  skate: '/merch/skate.png',
  randysmile: '/merch/randysmile.png',
  tonybizar: '/merch/tonybizar.png',
  capote: '/merch/capote.png',
};

function Merch() {
  return (
    <div className="merch-container" style={{ backgroundImage: `url(${space})` }}>
      <div className="introduc">
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
