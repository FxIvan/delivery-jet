import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './css/cartview.css'

export const CartView = () => {
  const {
    totalCompra,
    carrito,
    vaciarCarrito,
    removerCarrito,
    totalCantidad,
  } = useContext(CartContext);

  return (
    <div>
      {totalCantidad() === 0 ? (
        <div className=" container cartview-container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            
            <h2 className="">No hay Item</h2>
            <button type="button">Volver Al Inicio</button>
          </Link>
        </div>
      ) : (
        <div className="container">
          {carrito.map((prod) => {
            return (
              <div className="d-flex">
                <div className="mx-4">
                <h2>{prod.title}</h2>
                <img width="20" src={prod.pictureURL}/>
                <h2>Precio:  {prod.Price}</h2>
                <span>Cantidad:  {prod.clicks}</span>
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removerCarrito(prod.id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
          <button onClick={() => vaciarCarrito()} className="btn btn-danger ms-4 mt-4">Vaciar Carrito</button>
          <h3 className="mt-4">Total:{totalCompra()}</h3>
        </div>
      )}
    </div>
  );
};
