import React, {useState} from 'react'
import './style.css'
import moneda from './img/moneda.jpg'


export const ItemListContainer = () =>{

    
    const [clicks, setClicks] = useState(1)

    const sumarClick = () =>{
        setClicks(clicks + 1)
        console.log(clicks)
    }
    

    return(
    <div className="targetCarrito text-center">
        <div className="">
            <div>
            <h2>ORO</h2>
            <img src={moneda} alt="moneda"/>
            </div>

            <div className="row">
                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                <h3>Envios:</h3>
                <span>15</span>
                <h3>Peso:</h3>
                <span>15KG</span>
                </div>
            

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                <h3>Duracion:</h3>
                <span>1 MES</span>
                </div>

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                <h3>Zonas</h3>
                <span>Sur <br/> Norte <br/> Caba </span>
                </div>
            </div>
        </div>

        <div className="precioTarget">
            <h3>Precio:</h3>
            <h2>3.000$</h2>
        </div>

        <div className="row d-flex justify-content-evenly">
            <button className="col-2" onClick={sumarClick} type="button">+Agregar</button>
            <button className='col-2'>Comprar</button>
        </div>
        </div>
    )
}