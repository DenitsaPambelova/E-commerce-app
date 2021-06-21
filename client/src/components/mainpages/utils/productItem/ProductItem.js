import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import BtnRender from "./BtnRender";


function ProductItem({product}) {
    return (
        <div className="product_card">
            <img src={product.images.url} alt=""/>
            <div className="product-box">
                <h2 title={product.title} > {product.title}
                    <span>${product.price}</span>
                    <span>{product.description}</span>
                </h2>
            </div>
            <BtnRender product={product} />
        </div>
    );
}

export default ProductItem;