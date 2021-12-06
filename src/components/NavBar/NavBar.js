import React from 'react'
import { Link } from 'react-router-dom'
import {Menu} from './menus'
import './navBar.css'


export const NavBar = () =>{
    return(
        <div className="container d-flex">
            <Link to='/' style={{ textDecoration: 'none' }}><h1>JET</h1></Link>
            <Menu/>
        </div>
    )
}