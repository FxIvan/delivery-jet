import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../CartContext/CartContext'
import carrito from './img/carrito.png'


export const CartWidget = ({props}) =>{

    const {totalCantidad} = useContext(CartContext)
    
    return(
        <div>
            <a href="./shop"><img src={carrito} alt="carrito"/> <span>{props}</span></a>
            <span>{totalCantidad()}</span>
        </div>
    )
}