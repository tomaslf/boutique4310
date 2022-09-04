
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar /> 
      </header>
          <Nosotros/>      
          <ItemListContainer  greeting="Productos" />

      
           
    </div>
  );
}

export default App;
