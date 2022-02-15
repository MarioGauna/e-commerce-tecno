import react from 'react';
import './App.css';
import NavBar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <react.Fragment>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </react.Fragment>
  );
}

export default App;