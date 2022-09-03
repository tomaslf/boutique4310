
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">   
      <ItemListContainer  greeting="Nosotros" />    
        <img src="./logoCircu.png" className="App-logo" alt="logo" />
        
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
