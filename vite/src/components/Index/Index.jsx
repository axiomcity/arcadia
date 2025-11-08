import { useState } from "react";
import ico_horaires_1 from "./plan.webp";
import imgntfnd from "../../../assets/imgnotfound.png";
import "../../../assets/style.css";

import cardicon1 from "./card_icon1.png";
import cardicon2 from "./card_icon2.png";
import cardicon3 from "./card_icon3.png";
import cardbg1 from "./entrée_2.webp";
import img_billeterie from "./Chat_27.jpg";
import bg1 from "./bg_1.jpg";
import bg2 from "./bg_1.webp";
import bg3 from "./bg_2.webp";
import bg4 from "./bg_3.webp";

function Page() {
  // burger menu usestate
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isCardOpen1, setIsCardOpen1] = useState(true);
  const toggleCard1 = () => {
    setIsCardOpen1(true);
    setIsCardOpen2(false);
    setIsCardOpen3(false);
  };

  const [isCardOpen2, setIsCardOpen2] = useState(false);
  const toggleCard2 = () => {
    setIsCardOpen1(false);
    setIsCardOpen2(true);
    setIsCardOpen3(false);
  };

  const [isCardOpen3, setIsCardOpen3] = useState(false);
  const toggleCard3 = () => {
    setIsCardOpen1(false);
    setIsCardOpen2(false);
    setIsCardOpen3(true);
  };

  return (
    <nav>
      <div className="cont-banner">
        <img
          className="bg"
          src={bg1}
          onError={(e) => {
            e.target.src = imgntfnd;
          }}
          alt="jolie fille avec chat"
        />

        <div className="top-right">
          <div className="lang">
            <button
              onClick={toggleMenu}
              className={`bg-warning lang-btn-${isOpen ? "close" : "open"}`}
            >
              👅
            </button>
            <div className={`${isOpen ? "lang-open" : "lang-close"}`}>
              <div>
                <a href="russe.html">
                  🇫🇷<br></br> Francais
                </a>
              </div>
              <div>
                <a href="russe.html">
                  🇷🇺<br></br> Russe
                </a>
              </div>
              <div>
                <a href="russe.html">
                  🇪🇸<br></br> Espagnol
                </a>
              </div>
              <div>
                <a href="russe.html">
                  🇯🇵<br></br> Japonais
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-center hornav gap-3 d-flex flex-row p-3">
          <p className="d-flex flex-column text-left">
            <span className="fs-5">Heures d’ouverture</span>
            <span>/</span>
            <span className="fs-5 text-white">Aujourd’hui, 5. octobre</span>
            <span className="fs-4">9:00 - 18:00 heures</span>
            <span className="fs-6 text-white">
              Dernière entrée: 17:00 heures
            </span>
            <button className="horaires-btn my-2 rounded-3 text-black bg-warning">
              Toutes les heures d’ouvertures
            </button>
          </p>
          <p className="d-flex flex-column text-left">
            <span className="fs-5">Prochain nourrissage</span>
            <span>/</span>
            <span className="fs-5 text-white">Chimpanzés</span>
            <span className="fs-4">13:30 heures</span>
            <button className="horaires-btn my-2 rounded-3 text-black bg-warning">
              Toutes les heures d’ouvertures
            </button>
          </p>
          <p className="d-flex flex-column text-left">
            <span className="fs-5">Trajets</span>
            <span>/</span>
            <button className="horaires-btn my-2 rounded-3 text-black bg-warning">
              En transport en commun
            </button>
            <button className="horaires-btn my-2 rounded-3 text-black bg-warning">
              En voiture
            </button>
            <button className="horaires-btn my-2 rounded-3 text-black bg-warning">
              Itinéraire Google
            </button>
          </p>
        </div>
      </div>

      <span className="sep"></span>
      <div className="cont-billeterie">
        <h1>Billets & Prix</h1>

        <p className="prix-text">
          Réservez vos billets pour Zoo PARCACHAT en ligne rapidement et
          facilement. Environ 20.000 animaux attendent votre visite avec
          impatience!
        </p>
        <div className="bubble-billet-text">
          <p className="prix-text">
            Des travaux de construction sont actuellement en cours dans
            l'Aquarium de PARCACHAT et il y a des restrictions. Vous trouverez
            plus d'informations ici.
          </p>
        </div>
        <div className="billeterie-sec1">
          <div className="billet-flex">
            <a href="billetterie.html">
              <p>Billeterie</p>
              <img
                className="img-billeterie"
                src={img_billeterie}
                alt="billeterie link"
              />
            </a>
            <p>Acceder a la billeterie</p>
          </div>
        </div>

        <h1 className='p-3'>Aperçu des prix</h1>
        <div className="cont_billet">
          <p className={`z-0 ${isCardOpen1 ? "billet" : "billet-sel"}`} onClick={toggleCard1}>Billet du jour</p>
          <p className={`z-0 ${isCardOpen2 ? "billet" : "billet-sel"} billet-center-gap`} onClick={toggleCard2}>Pass annuel</p>
          <p className={`z-0 ${isCardOpen3 ? "billet" : "billet-sel"}`} onClick={toggleCard3}>Cartes de groupe</p>
        </div>

        <div className={`z-1 ${isCardOpen1 ? "card-open" : "card-close"}`}>
          <div className="incard-cont">
            <img className="incard-bg" src={cardbg1} alt="card bg " />
            <h2 className="ticket-title">Achetez le billet du jour !</h2>
            <div className="ticket-container">
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon1} alt="icon card1" />
                Moins cher que sur les caisses enregistreuses sur place
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon2} alt="icon card2" />
                Squeeze skip et directement à l'entrée
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon3} alt="icon card3" />
                Sans compte utilisateur
              </div>
            </div>
            <p>
              Extension du laissez-passer annuel existant?{" "}
              <a href="/"> Cliquez ici !</a>
            </p>
          </div>

          <div className="bubble-container">
            <div className="bubble-text-left">
              <p>Adultes</p>
              <p className="small">A partir de 16ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  {" "}
                  En ligne: à partir de 16,00 €<br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 19,00 €{" "}
                  </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  En ligne: à partir de 24,00 € <br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 37,00 €{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">4 a 15 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  {" "}
                  En ligne: à partir de 7,50 €<br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 12,50 €{" "}
                  </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  En ligne: à partir de 11,00 € <br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 17,50 €{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">moins de 4 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  libre <br></br>{" "}
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Réduit**</p>
              <p className="small">
                Étudiants (16+), Étudiants, Stagiaires, FSJler/BFDLer, ALG
                I+II bénéficiaires, détenteurs de BN, gravement handicapés (à
                partir de 50 GdB, 16+)
              </p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  {" "}
                  En ligne: à partir de 9,00 €<br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 14,00 €{" "}
                  </span>
                </p>
              </div>
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  En ligne: à partir de 13,00 € <br></br>
                  <span className="small">
                    {" "}
                    Caisse enregistreuse: 20,00 €{" "}
                  </span>
                </p>
              </div>
            </div>

            <p className="bubble-billet-text">
              {" "}
              Le prix du billet comprend une contribution volontaire de
              protection des espèces de 0,50 € (hors réduction) – voir plus
              d’informations ci-dessous.{" "}
            </p>

            <button className="bubble-cta">
              <p> RÉSERVEZ DES BILLETS MAINTENANT {">"} </p>{" "}
            </button>
          </div>
          <hr className="sep"></hr>
          <hr></hr>

          <div className="card-parapgraph">
            <p>Des indices importants !</p>
            <p>
              Le prix du billet comprend des frais de protection des espèces
              de 0,50 € (hors réduction). La contribution à la conservation
              des espèces soutient 100% du programme de protection des espèces
              de Zoo et Tierpark Berlin «BERLIN WORLD WILD». Vous trouverez
              plus d'informations ici. La contribution est facultative et peut
              être non sélectionnée indépendamment lors de l'achat.
            </p>

            <p>
              Les enfants de moins de 12 ans et les personnes qui n'ont pas la
              maturité nécessaire ou qui ont besoin d'une surveillance
              permanente en raison de leur condition mentale et/ou physique
              doivent toujours être accompagnés d'un adulte, une personne de
              surveillance.
            </p>

            <p>
              * Zoo et Aquarium Berlin doivent être visités le même jour et le
              site peut ne pas être laissé entre-temps. Veuillez noter qu'il
              peut y avoir des temps d'attente lors de l'entrée dans
              l'aquarium. Les billets pour une journée combinée sont
              disponibles au plus tard à 15 heures pour la journée de visite
              respective.
            </p>

            <p>
              ** Valable uniquement en combinaison avec une preuve appropriée.
              La preuve doit être personnalisée, avec une validité (valable)
              et délivrée par une autorité/une institution officielle. La
              preuve est vérifiée à l'entrée - veuillez fournir avec photo.
              Les personnes gravement handicapées jusqu'à 15 ans reçoivent
              l'entrée gratuite. Il en va de même pour une escorte d'une
              personne gravement handicapée avec note B/H dans la carte
              d'identité (accompagnateur maximal).
            </p>
          </div>
        </div>

        <div className={`z-1 ${isCardOpen2 ? "card-open" : "card-close"}`}>
          <div className="incard-cont">
            <img className="incard-bg" src={cardbg1} alt="card bg " />
            <h2 className="ticket-title">Pass annuel</h2>
            <div className="ticket-container">
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon1} alt="icon card1" />
                365 Jours d'animaux
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon2} alt="icon card2" />
                Est-ce que ca vaut la peine?
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon3} alt="icon card3" />
                Laisser passer file d'attente.
              </div>
            </div>
            <p>
              Extension du laissez-passer annuel existant?{" "}
              <a href="/"> Cliquez ici !</a>
            </p>
          </div>

          <div className="bubble-container">
            <div className="bubble-text-left">
              <p>Adultes</p>
              <p className="small">A partir de 16ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  <span className="small"> Abonnement: 62,50 € </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  <span className="small"> Abonnement: 95,50 € </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">4 a 15 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  <span className="small"> Abonnement: 107,50 € </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  <span className="small"> Abonnement: 119,50 € </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">moins de 4 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  libre <br></br>{" "}
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Réduit**</p>
              <p className="small">
                Étudiants (16+), Étudiants, Stagiaires, FSJler/BFDLer, ALG
                I+II bénéficiaires, détenteurs de BN, gravement handicapés (à
                partir de 50 GdB, 16+)
              </p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  {" "}
                  En ligne: à partir de 9,00 €<br></br>
                  <span className="small"> Abonnement: 14,00 € </span>
                </p>
              </div>
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  En ligne: à partir de 13,00 € <br></br>
                  <span className="small"> Abonnement: 20,00 € </span>
                </p>
              </div>
            </div>

            <p className="bubble-billet-text">
              {" "}
              Le prix du billet comprend une contribution volontaire de
              protection des espèces de 0,50 € (hors réduction) – voir plus
              d’informations ci-dessous.{" "}
            </p>

            <button className="bubble-cta">
              <p> RÉSERVEZ DES BILLETS MAINTENANT {">"} </p>{" "}
            </button>
          </div>
          <hr className="sep"></hr>
          <hr></hr>

          <div className="card-parapgraph">
            <p>Des indices importants !</p>
            <p>
              Les enfants de moins de 12 ans et les personnes qui n'ont pas la
              maturité nécessaire ou qui ont besoin d'une surveillance
              permanente en raison de leur condition mentale et/ou physique
              doivent toujours être accompagnés d'un adulte, une personne de
              surveillance.
            </p>
          </div>
        </div>

        <div className={`z-1 ${isCardOpen3 ? "card-open" : "card-close"}`}>
          <div className="incard-cont">
            <img className="incard-bg" src={cardbg1} alt="card bg " />
            <h2 className="ticket-title">Cartes de groupe</h2>
            <div className="ticket-container">
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon1} alt="icon card1" />
                Inscription a l'avance
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon2} alt="icon card2" />
                Billet de grope uniquement disponible sur caisse
              </div>
              <div className="incard-icon-cont">
                <img className="card-icon" src={cardicon3} alt="icon card3" />
                Certificat requis voir modele ci dessous.
              </div>
            </div>
            <p>
              Extension du laissez-passer annuel existant?{" "}
              <a href="/"> Cliquez ici !</a>
            </p>
          </div>

          <div className="bubble-container">
            <div className="bubble-text-left">
              <p>Adultes</p>
              <p className="small">A partir de 16ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  <span className="small"> Abonnement: 62,50 € </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  <span className="small"> Abonnement: 95,50 € </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">4 a 15 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  <span className="small"> Abonnement: 107,50 € </span>
                </p>
              </div>

              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  <span className="small"> Abonnement: 119,50 € </span>
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Enfants</p>
              <p className="small">moins de 4 ans</p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  libre <br></br>{" "}
                </p>
              </div>
            </div>

            <div className="bubble-text-left">
              <p>Réduit**</p>
              <p className="small">
                Étudiants (16+), Étudiants, Stagiaires, FSJler/BFDLer, ALG
                I+II bénéficiaires, détenteurs de BN, gravement handicapés (à
                partir de 50 GdB, 16+)
              </p>
            </div>
            <div className="bubble">
              <div className="bubble-content-space-btw">
                <p>Zoo</p>
                <p>
                  {" "}
                  En ligne: à partir de 9,00 €<br></br>
                  <span className="small"> Abonnement: 14,00 € </span>
                </p>
              </div>
              <div className="bubble-content-space-btw">
                <p>Zoo + Aquarium</p>
                <p>
                  {" "}
                  En ligne: à partir de 13,00 € <br></br>
                  <span className="small"> Abonnement: 20,00 € </span>
                </p>
              </div>
            </div>

            <p className="bubble-billet-text">
              {" "}
              Le prix du billet comprend une contribution volontaire de
              protection des espèces de 0,50 € (hors réduction) – voir plus
              d’informations ci-dessous.{" "}
            </p>

            <button className="bubble-cta">
              <p> RÉSERVEZ DES BILLETS MAINTENANT {">"} </p>{" "}
            </button>
          </div>
          <hr className="sep"></hr>
          <hr></hr>

          <div className="card-parapgraph">
            <p>Des indices importants !</p>
            <p>
              Les enfants de moins de 12 ans et les personnes qui n'ont pas la
              maturité nécessaire ou qui ont besoin d'une surveillance
              permanente en raison de leur condition mentale et/ou physique
              doivent toujours être accompagnés d'un adulte, une personne de
              surveillance.
            </p>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Page;
