import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from "../image/logo.png"
import {Link} from 'react-router-dom';
import CartWidget from '../components/CartWidget.js';

const NavBar = () =>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                <img src={Image} alt="Imagen no encontrada"></img>
                </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <table>
                                <tbody>
                                <tr>
                                    <td><li><Link to="/products" className="dropdown-item">Listado Completo</Link></li></td>
                                    <td><li><Link to="/category/1" className="dropdown-item">Microprocesadores</Link></li></td>
                                    <td><li><Link to="/category/2" className="dropdown-item">Motherboards</Link></li></td>
                                    <td><li><Link to="/category/3" className="dropdown-item">Memoria RAM</Link></li></td>
                                </tr>
                                <tr>
                                    <td><li><Link to="/category/4" className="dropdown-item">Placas de Video</Link></li></td>
                                    <td><li><Link to="/category/5" className="dropdown-item">Almacenamiento</Link></li></td>
                                    <td><li><Link to="/category/6" className="dropdown-item">Fuentes</Link></li></td>
                                    <td><li><Link to="/category/7" className="dropdown-item">Gabinetes</Link></li></td>
                                </tr>
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </ul>
            </div>
            <Link to="/Cart" className="navbar-brand">
                <CartWidget/>
            </Link>
            </div>
        </nav>
    );
}

export default NavBar;