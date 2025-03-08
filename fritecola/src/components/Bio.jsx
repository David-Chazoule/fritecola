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

        <div className="member">
          <div className="chris">
            <img className="membre" src={chris} alt="group" />
            <div className="description-chris">
              <h2>Christophe</h2>
              <p>
                Hey amigo !!! Moi, c’est Christophe, pour te servir, mon copain.
                Je suis le leader de ce groupe ! Qui d’autre que moi pourrait
                gérer un groupe d’humains ? J’ai eu ma propre entreprise, tu
                vois le niveau ! J’ai toujours voulu avoir mon groupe à moi, un
                bon groupe de rock ! Bon, avec l’arrivée de David, il a fallu
                que j’ajoute un peu d’électro, mais m’enfin… Je suis le mec le
                plus cool de Lyon, tu le sais ! Vous le savez tous ! Ta copine
                le sait ! Je gratte ma guitare depuis toujours. Je crois
                qu’après les femmes, c’est ce que je préfère : ma putain de
                guitare ! J’ai failli fourrer ma **** dedans ! Ça va, je déconne
                ! Sois rock’n’roll, man ! Sois rebelle !
              </p>
            </div>
          </div>
          <div className="chris">
            <img className="membre" src={mae} alt="group" />
            <div className="description-chris">
              <h2>Maeva</h2>
              <p>
                La première fois que j’ai vu Maéva, ce n’est pas son talent de
                chanteuse que j’ai retenu. Elle est plutôt bien roulée, la
                petite ! Nan, en vrai, on devait prendre Martina, mais c’est une
                catastrophe : un anglais horrible, et je ne parle même pas de
                son français ! Alors qu’on bossait à McDonald’s, j’ai surpris
                Maéva en train de chantonner à la caisse. Ça m’a presque donné
                envie d’acheter un menu Big Mac XXL ! Alors que je travaillais
                pour McDo, j’avais tout gratuit ! Mais malheureusement, son
                copain de l’époque l’empêchait de s’approcher de tout ce qui
                possédait un zizi… La débâcle ! Au final, on s’est retrouvés sur
                Paris, et là, bim, le groupe est arrivé : FRITE COLA !
                ROCK’N’ROLL ! En plus, elle joue de la basse, c’est un atout pas
                négligeable. Puis, une fille bien roulée dans un groupe, c’est
                des ventes en plus !
              </p>
            </div>
          </div>
          <div className="chris">
            <img className="membre" src={dav} alt="group" />
            <div className="description-chris">
              <h2>David</h2>
              <p>
                David travaillait au McDo avec moi. On ne s’était pas
                particulièrement parlé, puis un jour, il s’est fait virer. "FUCK
                MACDONALD ! JE SUIS VIRÉ !" Là, je me suis dit : "Bordel, il me
                le faut dans le groupe !" C’est une attitude rock’n’roll, c’est
                une attitude rebelle, et ça, ça me plaît ! Il a un petit don
                pour l’écriture, puis il se connaît bien en machines,
                ordinateurs, machins, trucs… Bingo ! Bienvenue dans le groupe !
                Ça reste un élément difficile à gérer : quand il ne fait pas une
                dépression pour une fille, il en fait une pour on ne sait pas
                quoi. Mais bon, il a les cheveux longs, ça, c’est rock’n’roll !
              </p>
            </div>
          </div>
          <div className="chris">
            <img className="membre" src={tony} alt="group" />
            <div className="description-chris">
              <h2>Tony</h2>
              <p>
                Avec Tony, on s’est tout de suite entendus. Il y a un esprit de
                compétition entre nous depuis qu’on se connaît : qui fera le
                meilleur cornet de frites, qui gagnera à Citadelle… C’est comme
                ça, on est en compète ! Même pour les filles ! À McDo, on avait
                le béguin pour les mêmes nanas, mais tu sais quoi ? C’est bibi
                qui a tout gagné, parce que je suis le Lyonnais le plus cool !
                Avec Tony, on rencontre deux problèmes : il est un peu dur de
                l’oreille, et c’est chiant, très chiant ! Le deuxième, c’est son
                besoin de fuir la civilisation et de vivre comme un hippie des
                montagnes. Tu es là, en pleine session studio, et le mec craque
                : il se barre dans la montagne pendant un mois ! C’est
                compliqué… Mais cette attitude hippie, c’est rock’n’roll,
                regarde John Lennon !
              </p>
            </div>
          </div>
          <div className="chris">
            <img className="membre" src={randy} alt="group" />
            <div className="description-chris">
              <h2>Randy</h2>
              <p>
                Avec Randy, on a bossé ensemble. C’était mon associé : j’étais
                le cerveau, il était les mains. On avait une start-up dans le
                high-tech. Techniquement, il n’avait rien pour rentrer dans le
                groupe. On essayait de faire du fric avec notre entreprise, mais
                j’avais remarqué un truc chez lui : il avait un sacré sens du
                rythme. Chaque tâche était faite de manière rythmée ! La manière
                dont il tapait avec un marteau, c’était du Phil Rudd d’AC/DC !
                Un jour, je lui ai dit : "Mec, deviens mon batteur !" Il m’a
                répondu : "Mais je ne sais pas faire de la batterie !" Moi,
                j’étais sûr du contraire. Je lui ai dit : "Mec, je te jure, tu
                as ce truc en toi !" Il l’a mal pris, il m’a dit que je disais
                ça parce qu’il était noir. Je lui ai répondu : "Mec, t’inquiète,
                fais confiance, amigo !" J’ai ramené une poubelle à pédale pour
                la grosse caisse, deux marmites pour les toms, des couvercles
                pour les cymbales, et let’s go ! Je lui ai dit : "Joue, mec !"
                Et là, waouh ! C’était incroyable ! J’avais le Ringo Starr noir
                devant moi ! Direct, je l’ai signé. Il est devenu mon batteur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
