
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartProvider'
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';



function App() {
  return (
    <CartProvider>
      <div className='App'>
        
        <BrowserRouter>
              <NavBar />          
        <Routes>           
                <Route path='/' element={<ItemListContainer  greeting="Nuestros Productos" />} />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/productos' element={<Productos/>} />
                <Route path='/nosotros' element={<Nosotros/>} />
                <Route path='/category/:category' element={<Productos /> } />
                <Route path='/cart' element={<Cart />} />     
        </Routes>
              <Footer/>
      </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
