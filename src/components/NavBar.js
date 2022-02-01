import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a className="navbar-brand" href="#">
                    <p className='logo'>LOGO</p>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Descuentos</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#">Carrito</a>
            </div>
        </nav>
    );
}

export default NavBar;