import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../image/carts.png";

const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-primary position-relative">
        <img src={Image}></img>
        <span class="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
        1
        <span class="visually-hidden">unread messages</span>
        </span>
        </button>
    );
}

export default CartWidget;