import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


const ItemListContainer = ({greeting} ) => {
    
    const {category} = useParams();
    const [ProductList, setProductList] = useState([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    useEffect(() =>{
        getProducts();
        }
        ,[category]);

  const getProducts =() =>{
    const db = getFirestore();
    const querySnapshot = collection(db,'item');
   
    if(category){
      const queryFilter = query(querySnapshot,where('category', '==' , category));
      getDocs(queryFilter)
      
      .then((response) => {
          const data = response.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()} ;
      })
      setProductList(data);
    })}
    
    else{
      getDocs(querySnapshot)
      .then((response) => {
          const data = response.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()} ;
      })
      setProductList(data);
    });}
  
   };

   const [loader, setLoader] = useState(true); 
      useEffect (() => {
        setTimeout(() => {
          setLoader(false);
        }, 2500)
      })


    return (
      <div>
    <Carousel className='portada' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/diegomaradona.jpg"
          alt="First slide" height={600}
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={600}
          className="d-block w-100"
          src="../images/argentinamundial.jpg"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={600}
          className="d-block w-100"
          src="../images/brasilcampeon.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
        <h1 className="titulo" >{greeting}</h1>
       {loader ? <img className='ball-img' alt='Old Football' src='../images/ball.png'/> : <ItemList list= {ProductList}/> }     
    </div>
      
    )
  }

export default ItemListContainer;