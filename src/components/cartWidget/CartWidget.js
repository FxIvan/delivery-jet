import React from 'react'
import carrito from './img/carrito.png'
import { ItemCount } from '../ItemCount/ItemCount'


export const CartWidget = ({props}) =>{
    
    return(
        <div>
            <a href="./shop"><img src={carrito} alt="carrito"/> <span>{props}</span></a>
        </div>
    )
}