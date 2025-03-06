import React from "react";
import pOne from "../assets/bioImg/filtreDavRan.png";
import pTwo from "../assets/bioImg/christonymae.png";
import spaceh from "../img/headerspace.jpg";
import chris from "../assets/bioImg/chris.jpg";
import mae from "../assets/bioImg/mae.jpg";
import dav from "../assets/bioImg/david.jpg";
import tony from "../assets/bioImg/tony.jpg";
import randy from "../assets/bioImg/randy.jpg";
function Bio() {
  return (
    <div
      className="bio-container"
      style={{ backgroundImage: `url(${spaceh})` }}
    >
      <div className="title-bio">
        <div className="img-gr">
          <img src={pOne} alt="group" />
          <img src={pTwo} alt="group" />
        </div>
        <h1>BIOGRAPHIE DU GROUPE</h1>
      </div>

      <p>
        Les fondations du groupe Frite Cola Électrique commencent en 2011 à
        Londres. Christophe, guitariste depuis son plus jeune âge, travaille
        dans un McDonald’s près du Big Ben. Pendant son travail ennuyeux, il
        fait la connaissance de Tony, ainsi que d’un certain Gabrielle, Olivier
        et de Djodesty. Il décide de former un groupe qui s’appellera « Menu
        Best Of ». Tony, agile de ses doigts, sera au clavier, Djo à la
        batterie, Olivier à la basse, et enfin Christophe à la guitare et au
        chant. Avec un emploi du temps chargé, il leur devient difficile de
        trouver du temps pour répéter. De plus, leur goût commun pour la fête et
        les femmes les détourne le plus souvent de leur projet de groupe. Ils se
        produiront dans un pub de Camden Town devant un public de 5 personnes.
        Christophe décide de recruter une chanteuse. Il se penche d’abord sur
        Martina, mais Martina, ayant une faible maîtrise de l’anglais, sera vite
        écartée. Il se penche ensuite sur Maeva, mais cette dernière, sous
        l’emprise d’un petit ami jaloux, refuse. Le groupe trouve de moins en
        moins de temps pour répéter. Djo, préférant les femmes et la drogue, se
        fait virer par Christophe. Il y a des tensions entre Olivier et Tony
        pour les yeux d’une belle Hongroise, et Gabrielle est de plus en plus à
        l’écart du groupe. Olivier, l’amoureux chronique, quitte le groupe pour
        une femme. Christophe se trouve embêté, mais le 3 janvier, sous ses
        yeux, il voit David, un collègue, se faire virer. Charmé par la réaction
        violente et agressive de ce dernier, Christophe l’approche et lui
        propose de rejoindre le groupe. Christophe, trouvant l’attitude de David
        rock’n’roll, est persuadé d’avoir trouvé le bon membre. Le groupe change
        de nom et s’appelle « Big Mac ». Gabrielle quitte le groupe du jour au
        lendemain sans raison apparente. Christophe pense que c’est à cause de
        la drogue. Le groupe se produit dans différents pubs et ne trouve pas le
        succès escompté. Tony, après avoir rencontré un chaman, décide de
        quitter le groupe pour l’Amérique du Sud, pour y faire un voyage
        intérieur et astral. David, qui enchaîne dépression sur dépression, ne
        se montre plus disponible. Christophe dissout le groupe. Pendant
        plusieurs années, chacun mènera sa vie à sa manière. En 2016, pour la
        plupart, tous étant sur Paris, ils décident de se retrouver autour d’un
        verre. Maeva, fraîchement célibataire, se joint à cet apéro improvise.
        Après une consommation excessive de bière, ils décident de former un
        nouveau groupe, « Frite Cola ». Maeva devient officiellement la bassiste
        et chanteuse du groupe. Christophe trouve enfin la voix féminine qu’il
        voulait. Ne rencontrant toujours pas le succès, chacun, à côté du
        groupe, travaille. Tony dans une agence de voyage, David une année sur
        deux au chômage, et Maeva, elle, enchaîne toutes sortes de travaux
        possibles à cause de son incapacité à rester en place. Christophe lance
        sa start-up et fait la rencontre de son associé Randy. Le feeling est
        bon, mais l’entreprise ne fonctionne pas. Christophe décèle quelque
        chose en Randy et finit par le convaincre de rejoindre le groupe. De là
        naît le groupe « Frite Cola Électrique ».
      </p>

      <div className="bio-member-container">
        <h1>Présentation des membres</h1>
        <p className="bychris">par Christophe lui même</p>
      </div>

      <div className="member">
        <div className="chris">
          <img className="membre" src={chris} alt="group" />
          <div className="description-chris">
            <h3>Chris</h3>
            <p>bkabkabkabababababababababababbaab</p>
          </div>
        </div>
        <div className="chris">
          <img className="membre" src={mae} alt="group" />
          <div className="description-chris">
            <h3>Mae</h3>
            <p>bkabkabkabababababababababababbaab</p>
          </div>
        </div>
        <div className="chris">
          <img className="membre" src={dav} alt="group" />
          <div className="description-chris">
            <h3>David</h3>
            <p>bkabkabkabababababababababababbaab</p>
          </div>
        </div>
        <div className="chris">
          <img className="membre" src={tony} alt="group" />
          <div className="description-chris">
            <h3>Tony</h3>
            <p>bkabkabkabababababababababababbaab</p>
          </div>
        </div>
        <div className="chris">
          <img className="membre" src={randy} alt="group" />
          <div className="description-chris">
            <h3>Randy</h3>
            <p>bkabkabkabababababababababababbaab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
