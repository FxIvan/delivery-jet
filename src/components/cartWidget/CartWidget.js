import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../CartContext/CartContext'
import carrito from './img/carrito.png'


export const CartWidget = () =>{
    const {totalCantidad} = useContext(CartContext)
    return(
        <div className={totalCantidad() === 0 ? "d-none" : ""}>
            <a href="./shop"><img src={carrito} alt="carrito"/></a>
            <span>{totalCantidad()}</span>
        </div>
    )
}