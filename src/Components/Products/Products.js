import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

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
                   cart.map (item => <p key={item.id}>{item.name}</p> )
               }
           </div>
        </div>
    );
};

export default Products;