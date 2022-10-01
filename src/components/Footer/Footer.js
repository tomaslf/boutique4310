import './Footer.css'
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <div >
            <div className="footer">     
                <ul className="mapaSitio">
                    <h5>
                        Mapa de sitio
                    </h5>
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
                </ul>
                <ul className="contactanos">
                    <h5>
                        Contactános
                    </h5>
                    <li>
                        <NavLink to={''}>
                            <img src="../images/envelope.svg" alt='Email Logo'/>boutique4310@gmail.com
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                               <img src="../images/whatsapp.svg" alt='Whatsapp Logo'/>Whatsapp
                        </NavLink>    
                    </li>
                  
                </ul>
                <ul className="redes">
                    <h5>
                        Redes
                    </h5>
                    <li>
                        <NavLink to={''}>
                                <img src="../images/instagram.svg" alt='Instagram Logo'/>Instagram
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={''} 
                       >
                                <img src="../images/facebook.svg" alt='Facebook Logo'/>Facebook
                        </NavLink>    
                    </li>
                </ul>    
            </div>
            <div className='subFooter'>
                <p>
                     Creado por Tomás Ferreyra <NavLink to={''}><img src="../images/linkedin.svg" alt='Instagram Logo'/></NavLink>    
                </p>
                    <p>
                        COPYRIGHT BOUTIQUE 4310. TODOS LOS DERECHOS RESERVADOS.  
                    </p>
              </div> 

    </div>
  )
}

export default Footer