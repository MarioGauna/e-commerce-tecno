import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from "../image/carousel1.jpg";
import image2 from "../image/carousel2.jpg";
import image3 from "../image/carousel3.jpg";
import ItemOfertaContainer from '../components/ItemOfertaContainer';

const Inicio = () =>{
    
    return(
        <div className='background'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="Imagen No encontrada"></img>
                    </div>
                    <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="Imagen No encontrada"></img>
                    </div>
                    <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="Imagen No encontrada"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <ItemOfertaContainer/>
        </div>
    )
}

export default Inicio;