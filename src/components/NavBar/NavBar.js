import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <div className="navBar">
      
      <ul>
          <a href='index.html'><img src="./logocircu.png" className="logoCircu" alt="logo" /></a>
          <li><a href='index.html'>Inicio</a></li>
          <li><a href='index.html'>Productos</a></li>
          <li><a href='index.html'>Nosotros</a></li>
          <li><CartWidget /></li>
      </ul>
      
      </div>
    )
}

export default NavBar;