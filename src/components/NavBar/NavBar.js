import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';




const NavBar = () => {
    return (
        <div className='navBar'>      
       <ul>
          <a href='index.html'><img src="../images/logocircu.png" className="App-logo" alt="logo" /></a>
          <li><a href='index.html'>Inicio</a></li>
          <li><a href='#Productos'>Productos</a></li>
          <li><a href='#Nosotros'>Nosotros</a></li>
          <li><CartWidget /></li>
      </ul>
      



      
      </div>
    )
}

export default NavBar;