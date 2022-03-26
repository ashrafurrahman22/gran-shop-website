import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = ({product}) => {
    const {name, price, img, ml} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="specification">
            <h3>{name}</h3>
            <h4>Ml: {ml}</h4>
            <h3>Price: {price}</h3>
            </div>
            <button className='cartBtn'>Add To Cart<FontAwesomeIcon icon={faCartShopping} />  </button>
        </div>
    );
};

export default Product;