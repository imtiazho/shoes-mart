const addToDb = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping_cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
}

const getCartFromLocalStorage = () => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping_cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const remobeSelectedItem = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping_cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        delete shoppingCart[id];
        localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
    }
}

const removeFullCartFromDb = () => {
    localStorage.removeItem('shopping_cart')
}

export {
    addToDb, 
    getCartFromLocalStorage, 
    remobeSelectedItem, 
    removeFullCartFromDb
}