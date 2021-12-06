import React, { useContext } from 'react'
import './menus.css'
import {CartWidget} from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export const Menu = () =>{

    const {carrito} = useContext(CartContext)

    
    return(
        <nav className="navGeneral">
                <ul className="d-flex justify-content-around dropdownMenu">
                <Link to="packs" style={{ textDecoration: 'none' }}><li><a href="/ruta">PACKS</a></li></Link>
                <Link to="hacer-envio" style={{ textDecoration: 'none' }}><li><a href="/ruta">HACER UN ENVIO</a></li></Link>
                <Link to="faq" style={{ textDecoration: 'none' }}><li><a href="/ruta">FAQ</a></li></Link>
                <li className="btndropDownSecond">ZONAS
                        <ul className="dropdownMenuSecond">
                            <Link to="sur" style={{ textDecoration: 'none' }}><li><a href="/ruta">SUR</a></li></Link>
                            <Link to="caba" style={{ textDecoration: 'none' }}><li><a href="/ruta">CABA</a></li></Link>
                            <Link to="norte" style={{ textDecoration: 'none' }}><li><a href="/ruta">NORTE</a></li></Link>
                        </ul>
                </li>
                <Link to="login" style={{ textDecoration: 'none' }}><li><a href="./ingresar">INGRESAR</a></li></Link>
                <Link to="carrito" style={{ textDecoration: 'none' }}><li> <CartWidget/> </li></Link>
               
                </ul>
            </nav>
    )
}