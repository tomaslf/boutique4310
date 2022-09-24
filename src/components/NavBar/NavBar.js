import './NavBar.css';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
    <div >
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
                        <NavLink to={'/'} 
                       >
                                Productos
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/nosotros'} >
                                Nosotros  
                        </NavLink>
                    </li>
                    <Link to={'/cart'}><li><CartWidget/></li>
                    </Link>
                </ul>
            </div> 
            <div className='navBar2'>
                <div className='category'>Categorías de Productos</div>
                <ul>
                    <li>
                        <NavLink to={'/category/Buzos'}>
                                Buzos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Remeras'}>
                                Remeras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Jeans'}>
                                Jeans
                        </NavLink>    
                    </li>
                
                </ul>
            </div>    
    </div>
    )
}

export default NavBar;