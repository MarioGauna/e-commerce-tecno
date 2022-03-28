import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import{serverTimestamp, setDoc, doc, collection, updateDoc, increment} from 'firebase/firestore';
import db from "../utilidades/firebaseConfig";

const Cart = () =>{

    const crearOrden=()=>{
        let orden={
            buyer:{
                name:"Mario Alberto Gauna",
                phone:"123456789",
                email:"pepe@gmail.com"
            },
            date:serverTimestamp(),
            items: cartTex.cartList.map((item)=>{
                return{
                    id:item.id,
                    title:item.name,
                    cost:item.price,
                    qty:item.cantidad
                };
            }),
            total:cartTex.total(),
        }
        console.log(orden);

        const addOrden= async()=>{
            const newOrden=doc(collection(db,"ordenes"));
            await setDoc(newOrden, orden);
            return newOrden;
        }
    
        addOrden()
        .then((result)=> {
            alert("Orden Creada: " + result.id); 
            cartTex.cartList.map(async(item)=>{
                const itemRef=doc(db,"products", item.id);
                await updateDoc(itemRef,{
                    stock:increment(-item.cantidad),
                });
            });
            cartTex.clearList();
        })
        .catch((error)=>console.log(error));
    };

    const cartTex=useContext(CartContext);

    const borrarItem=(item)=>{
        cartTex.removeItem(item.id);
    } 
    
    const limpiar=()=>{
        cartTex.clearList();
    }

    return(
            
        <section className="h-100 gradient-custom">
            <div className="col-lg-12 col-md-12 col-12">
        <h3 className="display-5 mb-2 text-center">Carrito de compras</h3>
        <p className="mb-5 text-center">{cartTex.badge()} items en tu carrito</p>
            </div>
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                    {
                        cartTex.cartList.length > 0
                        ?
                        cartTex.cartList.map(item=>(
                            
                            <div className="card mb-4 plantilla" key={item.id}>
                                <div className="card-header py-3">
                                    <h5 className="mb-0">{item.name}</h5>
                                </div>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                        <img src={item.image} className="w-100" alt="Imagen no encontrada"/>
                                    </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <p><strong>Cantidad: {item.cantidad}</strong></p>
                                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remover Item" onClick={()=>borrarItem(item)}>Remover</button>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 precio">
                                    <p className="text-start text-md-center">
                                        <strong>Precio por Unidad $ {item.price} c/u</strong>
                                    </p>
                                    <p className="text-start text-md-center">
                                        <strong>Precio Total $ {cartTex.itemTotal(item.id)}</strong>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className="card mb-4 estatico">
                            <p className='cartEsta'>Carrito Vacio</p>
                        </div>
                    }
                    </div>
                    <div className="col-md-4">
                    <div className="card mb-4 sumario">
                        <div className="card-header py-3">
                        <h5 className="mb-0">Sumario de compra</h5>
                        </div>
                        <div className="card-body">
                        <ul className="list-group list-group-flush">
                            
                            {
                                cartTex.cartList.map(item=>(
                                    <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0" key={item.id}>
                            {item.name}
                            <span>$ {cartTex.itemTotal(item.id)}</span>
                            </li>
                                ))

                            }
                            <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Precio Total</strong>
                            </div>
                            <span><strong>$ {cartTex.total()}</strong></span>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={crearOrden}>
                            Comprar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <Link to="/"><p>Seguir comprando</p></Link>                  
                    <button type="button" className="btn btn-primary" onClick={limpiar} style={{visibility: ! cartTex.cartList.length ? 'hidden': 'visible'}}>Limpiar Carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;