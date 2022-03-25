import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, price, img} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;