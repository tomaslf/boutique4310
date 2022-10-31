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
                                <img src="../images/brandlogo.png" className="App-logo" alt="logo" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                                Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/productos'} 
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
                <div className='category'>NUESTRAS CAMISETAS</div>

                <ul>
                    <li>
                        <NavLink to={'/category/Argentina'}>
                                <img src="../images/escudoargentina.jpg" alt='Logo Afa'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Alemania'}>
                                <img src="../images/escudoalemania.jpg" alt='Logo Alemania'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Francia'}>
                                <img src="../images/escudofrancia.jpg" alt='Logo Francia'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Brasil'}>
                                <img src="../images/escudobrasil.jpg" alt='Logo Brasil'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Inglaterra'}>
                                <img src="../images/escudoinglaterra (1).jpg" alt='Logo Inglaterra'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Suecia'}>
                                <img src="../images/escudosuecia.jpg" alt='Logo Suecia'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/México'}>
                                <img src="../images/MEXICO.jpg" alt='Logo Mexico'/>
                        </NavLink>
                    </li>
                
                </ul>
            </div>
            
    </div>
    )
}

export default NavBar;