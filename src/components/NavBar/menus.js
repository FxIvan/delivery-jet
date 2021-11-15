import React from 'react'
import './menus.css'
import {CartWidget} from '../cartWidget/CartWidget'

export const Menu = () =>{
    return(
        <nav className="navGeneral">
                <ul className="d-flex justify-content-around dropdownMenu">
                <li><a href="/ruta">PACKS</a></li>
                <li><a href="/ruta">HACER UN ENVIO</a></li>
                <li><a href="/ruta">FAQ</a></li>
                <li className="btndropDownSecond">ZONAS
                        <ul className="dropdownMenuSecond">
                            <li><a href="/ruta">SUR</a></li>
                            <li><a href="/ruta">CABA</a></li>
                            <li><a href="/ruta">NORTE</a></li>
                        </ul>
                </li>
                <li><a href="./ingresar">INGRESAR</a></li>
                <li> <CartWidget/> </li>
                </ul>
            </nav>
    )
}