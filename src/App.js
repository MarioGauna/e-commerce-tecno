import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Inicio from './components/Inicio';
import Cart from './components/Cart'
import NotFound from './components/NotFound';
import Footer from './components/footer';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect} from "react";

function App() {

  useEffect(() => {
    document.title = "XGAMING";  
  }, []);
  
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/products" element={<ItemListContainer/>}></Route>
          <Route path="/item/:iditem" element={<ItemDetailContainer/>}></Route>
          <Route path="/category/:idcategory" element={<ItemListContainer/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;