import React from 'react'
import './menus.css'
import {CartWidget} from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Menu = () =>{

    return(
 
        <nav className="navGeneral">
                <ul className="d-flex justify-content-around dropdownMenu">
                <Link to='/'><li><a href='#sectionpacks'>PACKS</a></li></Link>
                <Link to="hacer-envio" style={{ textDecoration: 'none' }}><li><a>HACER UN ENVIO</a></li></Link>
                <Link to="faq" style={{ textDecoration: 'none' }}><li><a href="/ruta">FAQ</a></li></Link>
                <li className="btndropDownSecond">ZONAS
                        <ul className="dropdownMenuSecond">
                            <Link to="/zonas/sur" style={{ textDecoration: 'none' }}><li><a>SUR</a></li></Link>
                            <Link to="/zonas/caba" style={{ textDecoration: 'none' }}><li><a>CABA</a></li></Link>
                            <Link to="/zonas/norte" style={{ textDecoration: 'none' }}><li><a>NORTE</a></li></Link>
                        </ul>
                </li>
                <Link to="login" style={{ textDecoration: 'none' }}><li><a>INGRESAR</a></li></Link>
                <Link to="carrito" style={{ textDecoration: 'none' }}><li> <CartWidget/> </li></Link>
               
                </ul>
        </nav>

    )
}