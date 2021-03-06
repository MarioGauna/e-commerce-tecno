import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../image/carts.png";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () =>{

    const cartTex=useContext(CartContext);
    
    return(
        <button type="button" className="btn btn-primary position-relative carrito">
        <img src={Image} alt="Imagen no encontrada"></img>
        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger" style={{visibility: ! cartTex.cartList.length ? 'hidden': 'visible'}}>
        {cartTex.badge()}
        <span className="visually-hidden">unread messages</span>
        </span>
        </button>
    );
}

export default CartWidget;