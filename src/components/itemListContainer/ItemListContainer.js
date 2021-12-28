import React, { useState, useEffect } from 'react'
import './style.css'
import mapa from './mapa.png'
import { stock } from './data/stock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
//Firebase
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  let { catId } = useParams()
  useEffect(() => {
    //1. Armo la referencia
    const productoRef = collection(db, 'productos')
    //const q = query(productoRef, where('category','==',catId))
    // 2 . Metodo GET a esa referencia
    getDocs(productoRef).then((resp) => {
      const items = resp.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })) //accedemos al dato de los documentos
      setProductos(items)
    })

    console.log('ItemListCotainer:', productos)
  }, [catId])
  return (
    <div>
      <div className="container">
        <div className="portada row mt-5">
          <div className="col-6 sol-sm-6 col-dm-6 pe-5 pt-5">
            <img src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" />
          </div>
          <div className="col-6 col-sm-6 col-dm-6 pt-5">
            <h1>!Bienvenido a JET, Empresa de Delivery</h1>
            <div>
              <p>
                Somos una empresa dedicada al rubro de delivery, nuestro
                objetivo es llevar tus productos lo más rápido de podemos en el
                mismo dia, contamos con gran trayectoria de experiencia en el
                rubro de delivery tambien contamos con tres tipos de paquetes
                que puedes contratar según tus necesidades, actualmente nos
                manejos por tres zonas de la provincia de buenos aires.
              </p>
            </div>
          </div>
        </div>

        {/********************************************************************/}
        <div className="card-all-container" id="sectionpacks">
          <div className="text-center mt-5">
            <h2>Nuestros Paquetes</h2>
          </div>
          <div className="row col-12 mb-5 m-auto w-100 d-flex justify-content-around">
            {<ItemList prop={productos} />}
          </div>
        </div>
        {/********************************************************************/}
      </div>

      <div className="mt-5">
        <div className="text-center">
          <h2>Medios de Pago Aceptado</h2>
        </div>
        <div className="row container-fluid medios-pago-container d-flex align-items-center text-center mt-5">
          <div className="visa col-3">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" />
          </div>

          <div className="mp col-3">
            <img src="https://mx.america-digital.com/wp-content/uploads/2021/03/LOGO-MERCADOPAGO_ESP.png" />
          </div>

          <div className="bitcoin col-3">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png" />
          </div>

          <div className="master col-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="text-center mt-5">
          <h2>Contacto</h2>
        </div>
        <div className="row mt-5">
          <div className="col-6 ">
            <span>Telefono</span>
            <p>+54 1136887781</p>
            <p>39653238</p>
            <span>Email</span>
            <p>almendraivan210814@gmail.com</p>
            <span>Direccion</span>
            <p>Rio Desaguadero 5014, Quilmes, Buenos Aires, Argentina</p>
          </div>

          <div className="col-6  text-center">
            <img src={mapa} />
          </div>
        </div>
      </div>
    </div>
  )
}
