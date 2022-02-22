import 'bootstrap/dist/css/bootstrap.min.css';
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
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                    <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                <Link to="/"><p>Continuar Comprando</p></Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default cart;