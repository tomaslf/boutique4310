
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">   
      <ItemListContainer  greeting="Proximamente conocerás nuestra tienda" />    
        <img src="./logoCircu.png" className="App-logo" alt="logo" />
        <Contador />
        <p>
          Proximamente
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
