import react from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <react.Fragment>
      <NavBar/>
      <ItemListContainer/>
    </react.Fragment>
  );
}

export default App;
