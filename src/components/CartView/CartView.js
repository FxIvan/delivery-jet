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
    <div className="">
      {totalCantidad() === 0 ? (
        <div className=" container cartview-container mt-5">
          <Link to="/" style={{ textDecoration: 'none' }}>
            
            <h2 className="">No hay Item</h2>
            <button type="button">Volver Al Inicio</button>
          </Link>
        </div>
      ) : (
        <div className="container all-container-cartview">
          {carrito.map((prod) => {
            console.log("CartView:",prod.id)
            return (
              <div className="d-flex" key={prod.id}>
                <div className="mx-4">
                <h2>{prod.title}</h2>
                <img width="20" src={prod.pictureURL}/>
                <h2>Precio:  {prod.Price}</h2>
                <span>Cantidad:  {prod.clicks}</span>
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={()=> removerCarrito(prod.id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
          <button onClick={() => vaciarCarrito()} className="btn btn-danger ms-4 mt-4">Vaciar Carrito</button>
          <Link to='/checkout' className="btn btn-success mx-2 mt-4">Terminar Mi Compra</Link>
          <h3 className="mt-4">Total:{totalCompra()}</h3>
        </div>
      )}
    </div>
  );
};
