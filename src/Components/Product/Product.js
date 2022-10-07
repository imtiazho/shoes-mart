import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {product, handleAddCartBtn} = props;
    const {name, color, price, mainImg, sideImg } = product;

    return (
        <div className='product'>
            <div className="product-img">
                <img src={mainImg} alt="" />
            </div>

            <div className="product-info">
                <div>
                    <p>{name} {color}</p>
                    <p><small>${price}</small></p>
                </div>

                <button onClick={() => handleAddCartBtn(product)}>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;