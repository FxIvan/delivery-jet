import { Timestamp, addDoc, collection} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../firebase/config";
import { validarDatos } from "../firebase/validarDatos";

export const Checkout = () => {
  const { carrito, totalCompra } = useContext(CartContext);

  const [compraDato, setCompraDato] = useState(
    {
      nombre: "",
      direccion: "",
      numero: "",
      telefono: "",
    }
  );

  const handleChange = (e) => {
    setCompraDato({
      ...compraDato,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const infoRef = collection(db,'informacion')
    if (!validarDatos(compraDato)) {
      return;
    }

    const orden ={
      itemBuy: {
        ...compraDato
      },
      items: carrito,
      total: totalCompra(),
      data:Timestamp.fromDate(new Date())
    }

      addDoc(infoRef,orden)
      .then(resp=>{
        console.log(resp.id)
      })

    
  }

  return (
    <div>
      {carrito.length === 0 ? ( //si en el carrito no hay producto nos devuelve a la ruta principal
        <Navigate to="/" />
      ) 
      : 
      (
        <div>
          <h1>Terminar Compra</h1>

          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              placeholder="Tu Nombre"
              value={compraDato.nombre}
            />
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              onChange={handleChange}
              placeholder="Tu Direccion"
              value={compraDato.direccion}
            />
            <label>Numero</label>
            <input
              type="number"
              name="numero"
              onChange={handleChange}
              placeholder="Tu Numero de Direccion"
              value={compraDato.numero}
            />
            <label>Telefono</label>
            <input
              type="number"
              name="telefono"
              onChange={handleChange}
              placeholder="Tu Telefono"
              value={compraDato.telefono}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  )
      
}

/*
    const orden ={
      itemBuy: {
        ...compraDato
      },
      items: carrito,
      total: totalCompra(),
      data:Timestamp.fromDate(new Date())
    };
*/