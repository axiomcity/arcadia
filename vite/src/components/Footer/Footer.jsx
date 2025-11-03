import icon_1 from './git.png';
import icon_2 from './youtube.png';
import icon_3 from './instagram.png';
import icon from './icon.png';
import '../../../assets/style.css'

function Footer() {


    return (
        <nav className="" >
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Mentions légales</a></li>
                        <li><a href="/">Accueil</a></li>
                        <li>
                            Protection des données <a href="/">RGPD</a>
                        </li>
                        <li>
                            Nos <a href="/">CGU</a> et <a href="/">CGV</a>
                        </li>
                        <li>
                            Mail : <a href="mailto:info@zoo-parcachat.org">info@zoo-parcachat.org</a>
                        </li>
                        <li>
                            <em>Address : <a href="/">Zoologie de la route dorée, 84000 France</a></em>
                        </li>
                        <li>
                            Consentement aux <a href="/">Cookies</a>
                        </li>
                    </ul>
                    <div className="footer-ico">
                        <a href="https://github.com">
                            <img src={icon_1} alt="ico 1" />
                        </a>
                        <a href="https://www.youtube.com">
                            <img src={icon_2} alt="ico 2" />
                        </a>
                        <a href="https://www.instagram.com">
                            <img src={icon_3} alt="ico 3" />
                        </a>
                    </div>
                    <div>
                        <a href="/"><img className='footer-img' src={icon} alt="" /></a>
                    </div>
                </div>
            <div className="footer-copy">
                Copyright @ David BERGER 2025
            </div>

        </nav>
    );
}

export default Footer;