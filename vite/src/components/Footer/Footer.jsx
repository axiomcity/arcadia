import icon_1 from './git.png';
import icon_2 from './youtube.png';
import icon_3 from './instagram.png';
import '../../../assets/style.css'

function Footer() {


    return (
        <nav className="" >

            <div className="cont-footer">
                <p>Ma kouille du Footer</p>
                <img src={icon_1} alt="ico 1" />
                <img src={icon_2} alt="ico 2" />
                <img src={icon_3} alt="ico 3" />
            </div>

        </nav>
    );
}

export default Footer;