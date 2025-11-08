import icon_1 from "./footer-ico_1.png";
import icon_2 from "./footer-ico_2.png";
import icon_3 from "./footer-ico_3.png";
import icon_4 from "./footer-ico_4.png";
import icon_5 from "./footer-ico_5.png";
import social1 from "./social1.svg";
import social2 from "./social2.svg";
import social3 from "./social3.svg";
import social4 from "./social4.svg";
import social5 from "./social5.svg";
import social7 from "./social7.svg";
import social8 from "./social8.svg";
import "../../../assets/style.css";
import { useState } from "react";

function Footer() {

  const [showLang, setLang] = useState(false);
  const handleLang = () => {
    setLang(!showLang);
  };

  return (
    <nav>
      <div className="cont-footer">
        <div className="footer-payment">
          <div className="footer-drop-menu">
            <button className="footer-drop-btn" onClick={handleLang}>Francais</button>
            <div className={`footer-drop-content ${showLang ? 'show-lang' : 'hide-lang'}`}>
              <a href="english.html">english</a>
              <a href="french.html">french</a>
            </div>
          </div>
          <p>Vos options de paiement:</p>
          <img src={icon_1} alt="ico1" />
          <img src={icon_2} alt="ico1" />
          <img src={icon_3} alt="ico1" />
          <img src={icon_4} alt="ico1" />
          <img src={icon_5} alt="ico1" />
        </div>
        <span className="footer-sep"></span>

        <div className="footer-socials">
          <div>
            <ul>
              <li>zooparcachat@cchat.fr</li>
              <li>424 CHemin du zoo Bretagne 24000</li>
              <li><a href="rgpd-12">Consentement aux cookies</a></li>
            </ul>
          </div>
          <div>
            <a href="facebook"> <img src={social1} className="fooico20" alt="social numero 1" /></a>
            <a href="reddit"> <img src={social2} className="fooico20" alt="social numero 1" /> </a>
            <a href="spotify"> <img src={social3} className="fooico20" alt="social numero 1" /> </a>
            <a href="steam"> <img src={social4} className="fooico20" alt="social numero 1" /> </a>
            <a href="tweeter"> <img src={social5} className="fooico20" alt="social numero 1" /> </a>
            <a href="tiktok"> <img src={social7} className="fooico20" alt="social numero 1" /> </a>
            <a href="steam"> <img src={social8} className="fooico20" alt="social numero 1" /> </a>
          </div>
        </div>

        <span className="footer-sep"></span>
        <div className="footer-newsletter">
          <div className="foo-form">
            <p>Inscrivez vous a la newsletter</p>
            <form action="get">
              <input type="mail" placeholder="Email" />
              <p> <input type="checkbox" className="input-newsletter" /> Je confirme
              par la présente que j'ai lu
                la politique de confidentialité.</p>
              <button type="submit">S'inscrire a la newsletter</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
