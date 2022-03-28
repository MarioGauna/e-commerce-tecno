import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from "../image/facebook.png";
import image2 from "../image/instagram.png";
import image3 from "../image/twitter.png";
import image4 from "../image/linkedin.png";

const Footer = () =>{

    return(
        <div className='footer'>
            <div className="social d-flex justify-content-center">
                <a className="social__link" href="https://www.facebook.com/mario.gauna/"><img className="facebook-social" src={image1} alt="Imagen no encontrada"></img></a>
                <a className="social__link" href="https://www.twitter.com/mariogamemaster"><img className="twitter-social" src={image2} alt="Imagen no encontrada"></img></a>
                <a className="social__link" href="https://www.instagram.com/marioalberto.gauna"><img className="instagram-social" src={image3} alt="Imagen no encontrada"></img></a>
                <a className="social__link" href="https://www.linkedin.com/in/mario-alberto-gauna-47532831/"><img className="linkedin-social" src={image4} alt="Imagen no encontrada"></img></a>
            </div>
            <p className="social__text d-flex justify-content-center">&copy; Copyright Mario Gauna 2021</p>
        </div>
    );
}

export default Footer;