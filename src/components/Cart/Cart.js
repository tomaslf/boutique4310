import './Cart.css'
import { useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext";
import { Button ,Alert, ModalFooter } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {getFirestore, collection, addDoc } from 'firebase/firestore';
import moment from 'moment';
import Swal from "sweetalert2";

const rutaInicial = '../images/'
const Cart = () => {
    const {cart , removeItem, clear} = useContext(CartContext);
    const total = cart.reduce((previousValue, currentValue)=> previousValue + currentValue.price * currentValue.cantidad,0 );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const nameEvent = (e) => {
      setInputName(e.target.value);
    };
    const emailEvent = (e) => {
      setInputEmail(e.target.value);
    };
    const phoneEvent = (e) => {
      setInputPhone(e.target.value);
    };
    const createOrder = () =>{
        const db = getFirestore();
        clear();
        const orden = {
            user: {
                name: inputName,
                email: inputEmail,
                phone: inputPhone
            },
            detalle:cart.map((item) => ({
              name: item.name,
              price: item.price,
              cantidad: item.cantidad,
            })),
            date: moment().calendar(),
            total: total,
        };
    const query = collection(db, "orders");
    addDoc(query, orden)
    .then(({ id }) => {
      Swal.fire({
        icon: 'success',
        title: "Gracias por tu compra",
        text: `Este es tu número de factura: ${id}`,
        background: '#2C3639',
        color: '#ffffff',
        confirmButtonColor: '#000000'
       }).then (function(){
              window.location = "/"
       })})
    .catch(() => alert("Hubo un error al procesar tu compra"))
    };
    const [loader, setLoader] = useState(true); 
      useEffect (() => {
        setTimeout(() => {
          setLoader(false);
        }, 8000)
      });
    
 
  return (
    <div>
            
               {cart.length === 0 ? (
            <>
                 {loader ?  <img className='ball-img' alt='Old Football' src='../images/ball.png'/> :
                  <>
                  <Alert className='text-center mt-5' variant='danger'>
                      NO TENES PRODUCTOS AGREGADOS   
                  </Alert>
                  <Link to={"/"}><h3>Ver Productos</h3></Link>
                  </>
                  
         }
            
            </>
           ) : 
          (<>
          <h1 className='cart-title'>PRODUCTOS ELEGIDOS</h1>
             {cart.map((item) =>(       
                <div key={item.id} className="cart-view">
                    <div>
                        <img className='cart-img' src={rutaInicial + item.img} alt='Camisetas Mundiales' />
                    </div>
                    <div className='max'>
                        <h3>{item.name} </h3>
                    </div>
                    <div className='max'>
                        <strong><p>${item.price} </p></strong>
                    </div>
                    <div className='max'>
                        <strong><p>{item.cantidad} </p></strong>
                    </div>
                    <div className='max'>
                        <h4>Sub-total : ${item.price * item.cantidad} </h4>
                    </div>
                        <div className='botones'>
                            <Button className='mb-3' variant='outline-danger' onClick={()=> removeItem(item.id)} >Eliminar Articulo</Button>
                      </div>  
              </div>     
            ))}
                <div className='totalCompra'> Total ${total} </div>
                <div className='botonesFinales'>
                    <Button className='vaciar' variant='danger' onClick={()=> clear()} >Vaciar Carrito</Button>
                    <Link to={'/productos'}><Button variant='primary' >Seguir Comprando</Button></Link>
                    <Button variant="success" onClick={handleShow}> Finalizar Compra</Button>
                      <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title >Datos de Facturación</Modal.Title>
                          </Modal.Header>
                            <Modal.Body>
                              <Form>
                                  <Alert className='text-center' variant='success'>
                                            El monto total de su compra es de ${total}
                                  </Alert>
                                  <Form.Group className="mb-3 "  controlId="exampleForm. ControlInput1">
                                      <Form.Label >Ingrese su Nombre y Apellido</Form.Label>
                                      <Form.Control
                                          type="text" required isInvalid
                                          placeholder="Nombre y Apellido"
                                          autoFocus
                                          onChange={nameEvent}/>
                                        <Form.Control.Feedback type="invalid">
                                                Por favor ingrese su nombre y apellido.
                                        </Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control
                                          type="email" required isInvalid
                                          placeholder="name@example.com"
                                          autoFocus
                                          onChange={emailEvent}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                                Por favor ingrese una dirección de correo.
                                        </Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control
                                          type="number" required isInvalid
                                          placeholder='Teléfono'
                                          autoFocus
                                          onChange={phoneEvent}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                               Por favor ingrese un número de teléfono.
                                        </Form.Control.Feedback>
                                  </Form.Group>
                                </Form>
                            </Modal.Body>
                            <ModalFooter>
                                <Button variant="secondary" onClick={handleClose}>
                                                  Cerrar
                                </Button>
                                <Button variant="success" onClick={createOrder}>
                                        Comprar
                                </Button>    
                            </ModalFooter>   
                      </Modal>
                 

                </div>    
            </>
            )};     
    </div>);
};

export default Cart