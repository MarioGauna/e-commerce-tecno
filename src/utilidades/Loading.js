import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Loading = () =>{
    return(
        <div className="d-flex justify-content-center">
            <div classname="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default Loading;