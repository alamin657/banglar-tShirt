import { key } from 'localforage';
import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <p>Thanks</p>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'red' : 'blue'}>Order Summary:{cart.length}</h2>
            <h3 className={`${cart.length === 3 ? 'orange' : 'blue'}`}>Something</h3>
            {message}
            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {
                cart.map(tshirt => <p
                    tshirt={key._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)} style={{ color: 'red' }}>X</button> </p>)
            }
            {
                cart.length === 2 && <span className='yellow'>Bonanzaa!!!</span>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;
/**
 * Conditional rendering
 * 1.Use if or if else to set a variable that will contain an element,components
 * 2.ternary operator: condition ? 'true' : 'false'
 * 3.Logical &&: (if the condition is true then next thing will be displayed)
 * 4.Logical || : (if the condition is false then next thing will be displayed)
 */
/**
 * conditional css style class
 * 1. use ternary
 * 2. ternary inside template string
 */