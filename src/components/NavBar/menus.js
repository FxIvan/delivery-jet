import React from 'react'
import './menus.css'
import {CartWidget} from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Menu = () =>{
    return(
        <nav className="navGeneral">
                <ul className="d-flex justify-content-around dropdownMenu">
                <Link to="packs"><li><a href="/ruta">PACKS</a></li></Link>
                <Link to="hacer-envio"><li><a href="/ruta">HACER UN ENVIO</a></li></Link>
                <Link to="faq"><li><a href="/ruta">FAQ</a></li></Link>
                <li className="btndropDownSecond">ZONAS
                        <ul className="dropdownMenuSecond">
                            <Link to="sur"><li><a href="/ruta">SUR</a></li></Link>
                            <Link to="caba"><li><a href="/ruta">CABA</a></li></Link>
                            <Link to="norte"><li><a href="/ruta">NORTE</a></li></Link>
                        </ul>
                </li>
                <Link to="login"><li><a href="./ingresar">INGRESAR</a></li></Link>
                <Link to="carrito"><li> <CartWidget/> </li></Link>
                </ul>
            </nav>
    )
}