import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

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
                    <li><CartWidget /></li>
                </ul>
            </div> 
            <div className='navBar2'>
                <div className='category'>Nuestras Camisetas</div>
                <ul>
                    <li>
                        <NavLink to={'/category/Buzos'}>
                                <img src="../images/escudoargentina.jpg" alt='Logo Afa'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Remeras'}>
                        <img src="../images/escudoalemania.jpg" alt='Logo Afa'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Jeans'}>
                        <img src="../images/escudofrancia.jpg" alt='Logo Afa'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Jeans'}>
                        <img src="../images/escudobrasil.jpg" alt='Logo Afa'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Jeans'}>
                        <img src="../images/escudoinglaterra (1).jpg" alt='Logo Afa'/>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to={'/category/Jeans'}>
                        <img src="../images/escudosuecia.jpg" alt='Logo Afa'/>
                        </NavLink>    
                    </li>
                
                </ul>
            </div>    
    </div>
    )
}

export default NavBar;