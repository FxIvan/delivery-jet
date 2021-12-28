import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../CartContext/CartContext'
import './catwidget.css'
import carrito from './img/carrito-de-compras.png'

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext)
  return (
    <div className={totalCantidad() === 0 ? 'd-none' : ''}>
      <div className='carrito-container'>
        <a href="./shop">
            <img src={carrito}/>
        </a>
        <span>{totalCantidad()}</span>
      </div>
    </div>
  )
}
