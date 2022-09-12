
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar /> 
      </header>
          <Nosotros/>      
          <ItemListContainer  greeting="Productos" />
          <ItemDetail/>

      
           
    </div>
  );
}

export default App;
