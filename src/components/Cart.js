import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () =>{

    const cartTex=useContext(CartContext);

    console.log(cartTex.cartList);

    const borrarItem=(item)=>{
        cartTex.cartList.removeItem(item.id);
    } 
    
    const limpiar=()=>{
        cartTex.clearList();
    }
    
    return(
            
        <section className="h-100 gradient-custom">
            <div className="col-lg-12 col-md-12 col-12">
    <h3 className="display-5 mb-2 text-center">Carrito de compras</h3>
        <p className="mb-5 text-center">{cartTex.cartList.length} items en tu carrito</p>
            </div>
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                    
                    {
                    cartTex.cartList.map(item=>(
                        
                        <div className="card mb-4 plantilla" key={item.id}>
                            <div className="card-header py-3">
                                <h5 className="mb-0">{item.name}</h5>
                            </div>
                            <div className="card-body">
                            {/* <!-- Single item --> */}
                            <div className="row">
                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                {/* <!-- Image --> */}
                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                    <img src={item.image} className="w-100" alt="Imagen no encontrada"/>
                                </div>
                                {/* <!-- Image --> */}
                                </div>
                
                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                {/* <!-- Data --> */}
                                <p><strong>Cantidad: {item.cantidad}</strong></p>
                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remover Item" onClick={()=>borrarItem(item.id)}>Remover</button>
                                {/* <!-- Data --> */}
                                </div>
                
                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                {/* <!-- Quantity --> */}
                                {/* <div className="d-flex mb-4 test1">
                                    <button className="btn btn-primary px-3 me-2">
                                    <i className="fas fa-minus">-</i>
                                    </button>
                
                                    <div className="form-outline">
                                    <input id="form1" type="number" className="form-control" />
                                    <label className="form-label">Cantidad</label>
                                    </div>
                
                                    <button className="btn btn-primary px-3 ms-2">
                                    <i className="fas fa-plus">+</i>
                                    </button>
                                </div> */}
                                {/* <!-- Quantity --> */}
                
                                {/* <!-- Price --> */}
                                <p className="text-start text-md-center">
                                    <strong>Precio $ {item.price}</strong>
                                </p>
                                {/* <!-- Price --> */}
                                </div>
                            </div>
                            {/* <!-- Single item --> */}
                            </div>
                        </div>
                        ))
                    }

                    </div>
                    <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-header py-3">
                        <h5 className="mb-0">Summario</h5>
                        </div>
                        <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Productos
                            <span>lorem</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>lorem</span>
                            </li>
                            <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Precio Total</strong>
                            </div>
                            <span><strong>$lorem</strong></span>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-lg btn-block">
                            Comprar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <Link to="/"><p>Seguir comprando</p></Link>
                    <button type="button" className="btn btn-primary" onClick={limpiar}>Limpiar Carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;