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

    // choose button handling
    const [choose, setChoose] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    // handling add to cart button
    const handleAddToCart = (product) => {

        const exists = cart.find( item => item == product)

        if((cart.length < 4) && (!exists)) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    // handle choose one for me
    const handleChoose = () => {
    const randomItem = parseInt(Math.round(Math.random() * cart.length))
       setChoose(randomItem);
    }
    console.log(choose)

    // handle remove all button
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

                         </p> )
               }
               <div>
                   <h4>We Choosed for you</h4>
               </div>
            <button onClick={handleChoose} id='btn'>Choose one for me <FontAwesomeIcon icon={faStar} /></button> <br /> <br />
            <button onClick={ handleRemoveAll } id='btn'>Remove All <FontAwesomeIcon icon={faTrash} /> </button>
           </div>
        </div>
    );
};

export default Products;