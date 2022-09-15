import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
    <div className='navBar'>      
       <ul>
            <li>
                <NavLink to={'/'}>
                        <img src="../images/logocircu.png" className="App-logo" alt="logo" />
                </NavLink>
            </li>
            <li>
                <NavLink to={'/'}>
                        Inicio
                </NavLink>
            </li>
            <li>
                <NavLink to={'/products'}>
                        Productos
                </NavLink>    
            </li>
            <li>
                <NavLink to={'/nosotros'}>
                        Nosotros  
                </NavLink>
            </li>
            <li><CartWidget /></li>
      </ul>
    </div>
    )
}

export default NavBar;