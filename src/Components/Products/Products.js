import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDeleteLeft, faRemove, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
    const [products, setProducts] = useState([])
     // cart
     const [cart, setCart] = useState([])
    //  console.log(cart)

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    // handling add to cart button
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleChoose = (id) => {
        Math.random(id)
    }

    const handleRemoveAll = () => {
        setCart([])
    }

    return (
        <div className='main-container'>
           <div className='products-container'>
           {
                products.map (product => <Product
                key={product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                ></Product>)
            }
           </div>
           <div className='order-container'>
           <h4 style={{textAlign:'center'}}>Order History</h4>
               {
                   cart.map (item => <p id='oderedinfo' key={item.id}>
                       
                         <img src={item.img} alt="" /> 
                         <p>{item.name}</p>
                         <button id='delbtn'><FontAwesomeIcon icon={faTrash} /></button>
                         </p> )
               }
            <button onClick={handleChoose} id='btn'>Choose one for me <FontAwesomeIcon icon={faStar} /></button> <br /> <br />
            <button onClick={ handleRemoveAll } id='btn'>Remove All <FontAwesomeIcon icon={faTrash} /> </button>
           </div>
        </div>
    );
};

export default Products;