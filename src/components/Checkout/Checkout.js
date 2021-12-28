import { Timestamp, addDoc, collection} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../firebase/config";
import { validarDatos } from "../firebase/validarDatos";

export const Checkout = () => {
  const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext);

  const [compraDato, setCompraDato] = useState(
    {
      nombre: "",
      direccion: "",
      dni: "",
      telefono: "",
    }
  );

  const handleChange = (e) => {
    setCompraDato({
      ...compraDato,
      [e.target.name]: e.target.value,
    });
  };


  const HandleSubmit = (e) => {
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
        vaciarCarrito()
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
          <div className="text-center mt-5">
            <h2>Terminar mi Compra</h2>
          </div>

          <div className="col-6 m-auto">
          <form onSubmit={HandleSubmit}>
            <label for="formControlInput" class="form-label">Correo Electronico</label>
            <input type="email" class="form-control" id="formControlInput" placeholder="example@hotmail.com" onChange={handleChange} name="direccion" value={compraDato.direccion}/>
            <label for="formControlInput" class="form-label">Nombre y Apellido</label>
            <input type="text" class="form-control" id="formControlInput" placeholder="Tu Nombre y Apellido" onChange={handleChange} name="nombre" value={compraDato.nombre}/>
            <label for="formControlInput" class="form-label">Telefono</label>
            <input type="number" class="form-control" id="formControlInput" placeholder="Tu numero de telefono" onChange={handleChange} name="telefono" value={compraDato.telefono}/>
            <label for="formControlInput" class="form-label">DNI</label>
            <input type="number" class="form-control" id="formControlInput" placeholder="Tu DNI" onChange={handleChange} name="dni" value={compraDato.dni}/>
            <button type="submit" className="btn btn-success mt-5 d-flex m-auto">Finalizar Compra</button>
            </form>
          </div>
        </div>    
      )
    }
    </div>
  )
      
}

/*
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
*/