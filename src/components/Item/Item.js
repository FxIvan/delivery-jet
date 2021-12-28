import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './item.css'

export const Item = ({ stocks }) => {
  return (
    <div className='card-container text-center col-4 mt-5'>
      {
        <div className='row'>
          <div className='col-12'>
            <h2>{stocks.title}</h2>
          </div>
          <div className="card-img col-12">
            <img src={stocks.pictureURL} />
          </div>
          <div className='col-12'>
            <span>precio</span>
            <h3>{stocks.Price}$</h3>
          </div>
          <div className='row'>
            <div className='col-6'>
              <span>duracion</span>
              <h3>{stocks.duracion}</h3>
            </div>
            <div className='col-6'>
              <span>envios</span>
              <h3>{stocks.envios}</h3>
            </div>
          </div>
          <div className='col-12'>
            <span>peso</span>
            <h3>{stocks.peso}</h3>
          </div>
          <div className='col-12'>
            <Link to={`/item/${stocks.id}`}>
              <button className='btn btn-dark'>Ver Mas</button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
