import { useState } from 'react';
import ico_horaires_1 from './plan.webp';
import imgntfnd from '../../../assets/imgnotfound.png';
import '../../../assets/style.css';

import cardicon1 from './card_icon1.png';
import cardicon2 from './card_icon2.png';
import cardicon3 from './card_icon3.png';
import cardbg1 from './entrée_2.webp';
import bg1 from './bg_1.jpg';
import bg2 from './bg_1.webp';
import bg3 from './bg_2.webp';
import bg4 from './bg_3.webp';

function Page() {

    // burger menu usestate
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isCardOpen1, setIsCardOpen1] = useState(false);
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
            <div className="section-container">
                <img className='bg' src={bg1} onError={(e) => { e.target.src = imgntfnd; }} alt="jolie fille avec chat" />

                <div className="top-right">
                    <div className="lang">
                        <button onClick={toggleMenu} className={`bg-warning lang-btn-${isOpen ? "close" : "open"}`}>👅</button>
                        <div className={`${isOpen ? "lang-open" : "lang-close"}`}>
                            <div>
                                <a href="russe.html">🇫🇷<br></br> Francais</a>
                            </div>
                            <div>
                                <a href="russe.html">🇷🇺<br></br> Russe</a>
                            </div>
                            <div>
                                <a href="russe.html">🇪🇸<br></br> Espagnol</a>
                            </div>
                            <div>
                                <a href="russe.html">🇯🇵<br></br> Japonais</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-center hornav gap-3 d-flex flex-row p-3">
                    <p className='d-flex flex-column text-left'>
                        <span className='fs-5'>Heures d’ouverture</span>
                        <span>/</span>
                        <span className='fs-5 text-white'>Aujourd’hui, 5. octobre</span>
                        <span className='fs-4'>9:00 - 18:00 heures</span>
                        <span className='fs-6 text-white'>Dernière entrée: 17:00 heures</span>
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">Toutes les heures d’ouvertures</button>
                    </p>
                    <p className='d-flex flex-column text-left'>
                        <span className='fs-5'>Prochain nourrissage</span>
                        <span>/</span>
                        <span className='fs-5 text-white'>Chimpanzés</span>
                        <span className='fs-4'>13:30 heures</span>
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">Toutes les heures d’ouvertures</button>
                    </p>
                    <p className='d-flex flex-column text-left'>
                        <span className='fs-5'>Plan</span>
                        <span>/</span>
                        <img className='horicon' src={ico_horaires_1} alt="plans" />
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">Sur le plan du zoo</button>
                    </p>
                    <p className='d-flex flex-column text-left'>
                        <span className='fs-5'>Trajets</span>
                        <span>/</span>
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">En transport en commun</button>
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">En voiture</button>
                        <button className="horaires-btn my-2 rounded-3 text-black bg-warning">Itinéraire Google</button>
                    </p>
                </div>
            </div>



            <span className='sep'></span>
            <div className="section-container">
                <h1 className='p-3'>Aperçu des prix</h1>
                <div className="cont_billet">
                    <p className={`z-0 ${isCardOpen1 ? "billet" : "billet-sel"}`} onClick={toggleCard1}>Billet du jour</p>
                    <p className={`z-0 ${isCardOpen2 ? "billet" : "billet-sel"} billet-center-gap`} onClick={toggleCard2}>Pass annuel</p>
                    <p className={`z-0 ${isCardOpen3 ? "billet" : "billet-sel"}`} onClick={toggleCard3}>Cartes de groupe</p>
                </div>
                <div className={`z-1 ${isCardOpen1 ? "card-open" : "card-close"}`}>
                    <div className='incard-cont'>
                        <img className='incard-bg' src={cardbg1} alt="card bg " />
                        <h2>
                            Acceder au pass annuel !
                        </h2>
                        <div className="cont1">
                            <div className='incard-icon-cont'>
                                <img className='card-icon' src={cardicon1} alt="icon card1" />
                                Moins cher que sur les caisses enregistreuses sur place
                            </div>
                            <div className='incard-icon-cont'>
                                <img className='card-icon' src={cardicon2} alt="icon card2" />
                                Squeeze skip et directement à l'entrée
                            </div>
                            <div className='incard-icon-cont'>
                                <img className='card-icon' src={cardicon3} alt="icon card3" />
                                Sans compte utilisateur
                            </div>
                        </div>
                        <p>Extension du laissez-passer annuel existant? <a href="/"> Cliquez ici !</a></p>
                    </div>


                    <div className='bubble-container'>
                        <p>Adultes</p>
                        <p className='small'>A partir de 16ans</p>
                        <div className="bubble">
                            <div>
                                <p>Zoo</p>
                                <p> En ligne: à partir de 16,00 € </p>
                                <p className='small'> Caisse enregistreuse: 25,00 € </p>
                            </div>

                            <div>
                                <p>Zoo + Aquarium</p>
                                <p> En ligne: à partir de 24,00 € </p>
                                <p className='small'> Caisse enregistreuse: 37,00 € </p>
                            </div>
                        </div>


                        <p> Le prix du billet comprend une
                            contribution volontaire de protection des espèces
                            de 0,50 € (hors réduction) – voir plus
                            d’informations ci-dessous. </p>

                        <hr className='sep'></hr>
                    </div>
                    <button className='bubble-cta'>
                        <p>
                            RÉSERVEZ DES BILLETS MAINTENANT {">"}
                        </p>
                    </button>
                </div>

                <hr></hr>

                <div className="card-parapgraph">
                    <p>
                        Des indices importants !
                    </p>
                    <p>
                        Le prix du billet comprend des frais de protection des espèces de 0,50 € (hors réduction).  La contribution à la conservation des espèces soutient 100% du programme de protection des espèces de Zoo et Tierpark Berlin «BERLIN WORLD WILD». Vous trouverez plus d'informations ici. La contribution est facultative et peut être non sélectionnée indépendamment lors de l'achat.
                    </p>

                    <p>
                        Les enfants de moins de 12 ans et les personnes qui n'ont pas la maturité nécessaire ou qui ont besoin d'une surveillance permanente en raison de leur condition mentale et/ou physique doivent toujours être accompagnés d'un adulte, une personne de surveillance.
                    </p>

                    <p>
                        * Zoo et Aquarium Berlin doivent être visités le même jour et le site peut ne pas être laissé entre-temps. Veuillez noter qu'il peut y avoir des temps d'attente lors de l'entrée dans l'aquarium. Les billets pour une journée combinée sont disponibles au plus tard à 15 heures pour la journée de visite respective.
                    </p>

                    <p>
                        ** Valable uniquement en combinaison avec une preuve appropriée. La preuve doit être personnalisée, avec une validité (valable) et délivrée par une autorité/une institution officielle. La preuve est vérifiée à l'entrée - veuillez fournir avec photo. Les personnes gravement handicapées jusqu'à 15 ans reçoivent l'entrée gratuite. Il en va de même pour une escorte d'une personne gravement handicapée avec note B/H dans la carte d'identité (accompagnateur maximal).
                    </p>
                </div>

                <div className={`z-1 ${isCardOpen2 ? "card-open" : "card-close"}`}>
                    <h2>
                        AH 2 !
                    </h2>
                </div>


                <div className={`z-1 ${isCardOpen3 ? "card-open" : "card-close"}`}>
                    <h1>
                        AH 3 !
                    </h1>
                </div>

            </div>
        </nav >
    );
}

export default Page;