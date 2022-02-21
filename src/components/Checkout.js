import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Checkout =() =>{
    return(
        <Link to='/cart'><button type="button" className="btn btn-success">Checkout</button></Link>
    )
}

export default Checkout;