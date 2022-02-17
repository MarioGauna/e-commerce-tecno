import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import CartWidget from '../components/CartWidget.js';

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link to="/" className="navbar-brand">
                    <p className='logo'>LOGO</p>
                </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/category/1" className="dropdown-item">Microprocesadores</Link></li>
                            <li><Link to="/category/2" className="dropdown-item">Motherboards</Link></li>
                            <li><Link to="/category/3" className="dropdown-item">Memoria RAM</Link></li>
                            <li><Link to="/category/4" className="dropdown-item">Placas de Video</Link></li>
                            <li><Link to="/category/5" className="dropdown-item">Almacenamiento</Link></li>
                            <li><Link to="/category/6" className="dropdown-item">Fuentes</Link></li>
                            <li><Link to="/category/7" className="dropdown-item">Gabinetes</Link></li>
                        </ul>
                    </div>
                    <li className="nav-item">
                        <Link to="/ofertas" className="nav-link" aria-current="page">Ofertas</Link>
                    </li>
                </ul>
            </div>
            <Link to="/" className="navbar-brand">
                <CartWidget/>
            </Link>
            </div>
        </nav>
    );
}

export default NavBar;
