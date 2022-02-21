import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/item/:iditem" element={<ItemDetailContainer/>}></Route>
        <Route path="/category/:idcategory" element={<ItemListContainer/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;