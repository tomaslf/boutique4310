
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
            <NavBar />          
      <Routes>           
              <Route path='/' element={<ItemListContainer  greeting="Productos" />}></Route>
              <Route path='/products/:id' element={<ItemDetailContainer />}></Route>
              <Route path='/nosotros' element={<Nosotros/>}></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
