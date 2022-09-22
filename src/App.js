
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './context/CartProvider'



function App() {
  return (
    <CartProvider>
      <div className='App'>
        
        <BrowserRouter>
              <NavBar />          
        <Routes>           
                <Route path='/' element={<ItemListContainer  greeting="Productos" />} ></Route>
                <Route path='/detail/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/nosotros' element={<Nosotros/>}></Route>
                <Route path='/category/:category' element={<ItemListContainer /> } ></Route>
                      
        </Routes>
      </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
