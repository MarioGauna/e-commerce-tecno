import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () =>{

    const cartTex=useContext(CartContext);

    return(
        <section className="h-100 gradient-custom">
        {
            cartTex.cartList.map(item=>(

                
        <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
                <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body">
                    {/* <!-- Single item --> */}
                    <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* <!-- Image --> */}
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div className="mask"></div>
                        </a>
                        </div>
                        {/* <!-- Image --> */}
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p><strong>{item.name}</strong></p>
                        <p>Color: blue</p>
                        <p>Size: M</p>
                        <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                        title="Remove item">
                        <i className="fas fa-trash"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                        title="Move to the wish list">
                        <i className="fas fa-heart"></i>
                        </button>
                        {/* <!-- Data --> */}
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div className="d-flex mb-4 test1">
                        <button className="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                            <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                            <label className="form-label" for="form1">{item.cantidad}</label>
                        </div>

                        <button className="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i className="fas fa-plus"></i>
                        </button>
                        </div>
                        {/* <!-- Quantity --> */}

                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                        <strong>${item.price}</strong>
                        </p>
                        {/* <!-- Price --> */}
                    </div>
                    </div>
                    {/* <!-- Single item --> */}

                    <hr className="my-4" />

                    {/* <!-- Single item --> */}
                    <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* <!-- Image --> */}
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                            className="w-100" alt="pepe"/>
                        <a href="#!">
                            <div className="mask"></div>
                        </a>
                        </div>
                        {/* <!-- Image --> */}
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p><strong>Red hoodie</strong></p>
                        <p>Color: red</p>
                        <p>Size: M</p>

                        <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                        title="Remove item">
                        <i className="fas fa-trash"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                        title="Move to the wish list">
                        <i className="fas fa-heart"></i>
                        </button>
                        {/* <!-- Data --> */}
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div className="d-flex mb-4 test1">
                        <button className="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                            <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                            <label className="form-label" for="form1">Quantity</label>
                        </div>

                        <button className="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i className="fas fa-plus"></i>
                        </button>
                        </div>
                        {/* <!-- Quantity --> */}

                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                        <strong>$17.99</strong>
                        </p>
                        {/* <!-- Price --> */}
                    </div>
                    </div>
                    {/* <!-- Single item --> */}
=======
import {Link} from 'react-router-dom';

const cart = () =>{
    return(
        <section className="pt-5 pb-5">
            <div className="container">
            <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                    <h3 className="display-5 mb-2 text-center">Carrito de compras</h3>
                    <p className="mb-5 text-center">
                        <i className="text-info font-weight-bold">3</i> items en tu carrito</p>
                    <table id="shoppingCart" className="table table-condensed table-responsive">
                        <thead>
                            <tr>
                                <th className="test2">Producto</th>
                                <th className="test3">Precio</th>
                                <th className="test4">Cantidad</th>
                                <th className="test5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "></img>
                                        </div>
                                        <div className="col-md-9 text-left mt-sm-2">
                                            <h4>Product Name</h4>
                                            <p className="font-weight-light">Brand &amp; Name</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">$49.00</td>
                                <td data-th="Quantity">
                                    <input type="number" className="form-control form-control-lg text-center" value="1"></input>
                                </td>
                                <td className="actions" data-th="">
                                    <div className="text-right">
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-sync"></i>
                                        </button>
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "></img>
                                        </div>
                                        <div className="col-md-9 text-left mt-sm-2">
                                            <h4>Product Name</h4>
                                            <p className="font-weight-light">Brand &amp; Name</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">$49.00</td>
                                <td data-th="Quantity">
                                    <input type="number" className="form-control form-control-lg text-center" value="1"></input>
                                </td>
                                <td className="actions" data-th="">
                                    <div className="text-right">
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-sync"></i>
                                        </button>
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "></img>
                                        </div>
                                        <div className="col-md-9 text-left mt-sm-2">
                                            <h4>Product Name</h4>
                                            <p className="font-weight-light">Brand &amp; Name</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">$49.00</td>
                                <td data-th="Quantity">
                                    <input type="number" className="form-control form-control-lg text-center" value="1"></input>
                                </td>
                                <td className="actions" data-th="">
                                    <div className="text-right">
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-sync"></i>
                                        </button>
                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="float-right text-right">
                        <h4>Subtotal:</h4>
                        <h1>$99.00</h1>
                    </div>
>>>>>>> 4aa0ad4deb415897121d7a5cedd1510c8275536b
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                    <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
                </div>
<<<<<<< HEAD
                <div className="card mb-4">
                <div className="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                    <p><strong>We accept</strong></p>
                    <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                    <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express" />
                    <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                    <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark" />
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                        <strong>Total amount</strong>
                        <strong>
                            <p className="mb-0">(including VAT)</p>
                        </strong>
                        </div>
                        <span><strong>$53.98</strong></span>
                    </li>
                    </ul>

                    <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    
            ))
        }</section>
=======
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                <Link to="/"><p>Continuar Comprando</p></Link>
                </div>
            </div>
        </div>
    </section>
>>>>>>> 4aa0ad4deb415897121d7a5cedd1510c8275536b
    )
}

export default Cart;