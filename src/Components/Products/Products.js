import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } , [])
    return (
        <div>
            <h2>Products compo</h2>
        </div>
    );
};

export default Products;