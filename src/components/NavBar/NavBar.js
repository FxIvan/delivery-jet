import React from 'react'
import {Menu} from './menus'
import './navBar.css'
export const NavBar = () =>{
    return(
        <div className="container d-flex">
            <h1>JET</h1>
            <Menu/>
        </div>
    )
}