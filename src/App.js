import './App.css';
import react from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<react.Fragment><ItemListContainer/></react.Fragment>}></Route>
        <Route path="/item/:iditem" element={<react.Fragment><ItemDetailContainer/></react.Fragment>}></Route>
        <Route path="/category/:idcategory" element={<react.Fragment><ItemListContainer/></react.Fragment>}></Route>
        <Route path="/ofertas" element={<react.Fragment><ItemListContainer/></react.Fragment>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;