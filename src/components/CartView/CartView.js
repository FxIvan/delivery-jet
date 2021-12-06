import React,{useState,useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'

export const CartView = () =>{
    const {totalCompra,carrito,vaciarCarrito,removerCarrito} = useContext(CartContext)
    console.log(carrito)
    return(
        <div>
            {
                carrito.map(prod=>{
                    return(
                    <div>
                        <h1>{prod.title}</h1>
                        <h2>{prod.Price}</h2>
                        <span>{prod.clicks}</span>
                        <button type="button" className="btn btn-danger" onClick={()=>removerCarrito(prod.id)}><BsFillTrashFill/></button>
                    </div>
                    )
                })
            }

            <button type="button" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}