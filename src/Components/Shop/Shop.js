import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getCartFromLocalStorage, remobeSelectedItem, removeFullCartFromDb } from '../Utilities/handle-localstorage';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    if(cart.length > 4){
        console.log('Ki bhaia!')
    }
    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( () => {
        const storedCart = getCartFromLocalStorage()
        let savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const itemDeleteHandle = (id) =>{
        const newCartAfterDelete = cart.filter(product => product.id !== id);
        setCart(newCartAfterDelete)
        remobeSelectedItem(id)
        
    }
    const removeCart = () => {
        setCart([])
        removeFullCartFromDb()
    }
    const handleAddCartBtn = selectedProduct => {
        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...restProduct, exist]
        }
        setCart(newCart)


        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    product={product}
                    key={product.id}
                    handleAddCartBtn={handleAddCartBtn}
                    ></Product>)
                }

                <div className="question-answer">
                    <div className='each-item'>
                        <h3>How react works?</h3>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept free inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                    <div className='each-item'>
                        <h3>Props vs State</h3>
                        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The "setState" property is used to update the state values in the component.</p>
                    </div>
                </div>
            </div>

            <div className="cart-container">
                <Cart 
                cart={cart}
                itemDeleteHandle={itemDeleteHandle}
                removeCart={removeCart}
                ></Cart>
            </div>
        </div>
    );

    
};

export default Shop;