import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const {cart, itemDeleteHandle, removeCart} = props;
    const [freeProduct, setFreeProduct] = useState({})
    const [offer, setOffer] = useState(false)

    const handleOffer = () => {
        const randomProductNumber = Math.floor(Math.random()* cart.length);
        const selectedFreeProduct = cart[randomProductNumber];
        setFreeProduct(selectedFreeProduct)
    }

    useEffect( () => {
        if(cart.length > 0){
            setOffer(true)
        }
        else{
            setOffer(false)
        }
    } , [cart])

    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {
                cart.map(product => (
                    <div key={product.id} className="item">
                        <img src={product.mainImg} alt="" />

                        <div>
                            <p>{product.name} {product.color}</p>
                            <p>{product.price * product.quantity}</p>
                            <p>{product.quantity}</p>
                        </div>

                        <button onClick={() => itemDeleteHandle(product.id)}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </div>
                ))
            }
            <p className='removeCartBtn' onClick={removeCart}>You can choose again.</p>
            <div id="divider"></div>
            <h4>Choose one for me</h4>
            <button 
            onClick={handleOffer} 
            className={offer ? "offer" : "offer-disable"}
            disabled={!offer}
            >Choose</button>

            { Object.keys(freeProduct).length > 0
                             &&
                <div key={freeProduct.id} className="item">
                    <img src={freeProduct.mainImg} alt="" />

                    <div>
                        <p>{freeProduct.name} {freeProduct.color}</p>
                        <p>{freeProduct.price}</p>
                    </div>

                    {/* <button onClick={() => itemDeleteHandle(freeProduct.id)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>         */}
                </div>
            }
        </div>
    );
};

export default Cart;