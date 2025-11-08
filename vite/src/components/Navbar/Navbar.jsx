import { useState } from "react";
import icon from "./icon.png";
import billet from "./billet.png";
import burger from "./burger.png";
import Chanimain from "./anim_icon4.png";
import "../../../assets/style.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar bg-warning  align-content-center">
      <a href="billeterie.html">
        <img className="billet-btn-banner" src={billet} alt="billeterie" />
      </a>
      <div className="align-items-center d-flex position-absolute top-0">
        <a href="/">
          <img className="ico64" src={icon} alt="LOGO-ZOO" />
        </a>
        <h6 className="px-3 fs-4 text-black">
          ZOO<br></br> PARCACHAT
        </h6>
        <img className="chat ico64 chanim" src={Chanimain} alt="chanimain" />
      </div>

      <div className="w-50 d-flex justify-content-end align-items-center position-absolute top-0 end-0 navend">
        <nav
          className={` d-flex align-items-center navbar_cont ${showLinks ? "show_nav" : "hide_nav"
            }`}
        >
          <ul className="navbar_links d-flex list-unstyled m-0 px-4">
            <li className=" px-1 navbar_item SlideInDown-1">
              <a href="index.html" className="ulink text-decoration-none">
                Billeterie
              </a>
            </li>
            <li
              href="./index-us.html"
              className=" px-1 navbar_item SlideInDown-2"
            >
              <a className="ulink text-decoration-none">Services</a>
            </li>
            <li className="px-1 navbar_item SlideInDown-3">
              <a href="./index-de.html" className="ulink text-decoration-none">
                Animaux
              </a>
            </li>
            <li className="px-1 navbar_item SlideInDown-4">
              <a href="./index-tr.html" className="ulink text-decoration-none">
                Connexion
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <img
            className="navbar_burger burger bg-orange ico64"
            onClick={handleShowLinks}
            src={burger}
            alt="burger menu icon"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
