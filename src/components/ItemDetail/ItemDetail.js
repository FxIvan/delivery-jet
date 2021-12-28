import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

//id,title,envios,peso,duracion,Price,pictureURL
export const ItemDetail = ({
  id,
  title,
  envios,
  peso,
  duracion,
  Price,
  pictureURL,
  category,
  stock,
  zonaEnvio,
  descripcion
}) => {
  const [clicks, setClicks] = useState(1)

  const { agregarAlCarrito, isInCart } = useContext(CartContext)

  const [agregar, setAgregado] = useState(false)

  //Carrito

  const handleAgregar = () => {
    if (clicks > 0) {
      agregarAlCarrito({
        id,
        title,
        Price,
        clicks,
      })
    }
    setAgregado(true)

    console.log(id)
  }

  return (
    <div>
      <div className="card-container container col-4 mt-5">
        <div className="row text-center">
          <div className="col-12">
            <h2>{title}</h2>
          </div>
          <div className="card-img col-12">
            <img src={pictureURL} />
          </div>
          <div className="col-12">
            <span>precio</span>
            <h3>{Price}$</h3>
          </div>
          <div className="row">
            <div className="col-6">
              <span>duracion</span>
              <h3>{duracion}</h3>
            </div>
            <div className="col-6">
              <span>envios</span>
              <h3>{envios}</h3>
            </div>
          </div>
          <div className="col-12">
            <span>peso</span>
            <h3>{peso}</h3>
          </div>
          <div>
            {!agregar ? (
              <ItemCount
                stock={stock}
                clicks={clicks}
                setClicks={setClicks}
                onAdd={handleAgregar}
              />
            ) : (
              <Link to="/carrito" style={{ textDecoration: 'none' }}>
                <button className='btn btn-success'>Terminar mi compra</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='text-center mt-5'>
          <h2>Descripcion del Producto</h2>
        </div>
        <div>
              <h3>Las Zonas de Envios de este paquete es:</h3>
              <p>{zonaEnvio}</p>
        </div>
        <div>
        <h3>Detalle:</h3>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  )
}
