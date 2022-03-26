import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, handleAddToCart}) => {
    const {name, price, img, ml} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="specification">
            <h3>{name}</h3>
            <h5>Ml: {ml}</h5>
            <h4>Price: ${price}</h4>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='cartBtn'>Add To Cart<FontAwesomeIcon icon={faCartShopping} />  </button>
        </div>
    );
};

export default Product;