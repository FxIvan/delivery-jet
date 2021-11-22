import React,{useEffect, useState} from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import { stock } from './data/stock'

export const ItemList = () =>{
    const [state,setState] = useState()

    useEffect(() => {
        setTimeout(()=>{
            const datosProductos = () =>{
                return new Promise((resolve,reject)=>{
                    resolve(
                        stock.map((stocks)=>{
                            return(
                            <div className="targetCarrito text-center col-md-4">
                            <div className="">
                                <div>
                                <h2>{stocks.title}</h2>
                                <img src={stocks.pictureURL} alt="moneda"/>
                                </div>
                    
                                <div className="row">
                                    <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                                    <h3>Envios:</h3>
                                    <span>{stocks.envios}</span>
                                    <h3>Peso:</h3>
                                    <span>{stocks.peso}KG</span>
                                    </div>
                                
                    
                                    <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                                    <h3>Duracion:</h3>
                                    <span>{stocks.duracion}</span>
                                    </div>
                    
                                    <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                                    <h3>Zonas</h3>
                                    <span>Sur <br/> Norte <br/> Caba </span>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="precioTarget">
                                <h3>Precio:</h3>
                                <h2>{stocks.Price}$</h2>
                            </div>
                    
                            
                            <ItemCount stock="5"/>
                            </div>
                            )
                        }
                    )
                    )})
            }

            datosProductos()
            .then((resp)=>{
                setState(resp)
            })
        },3000)
    }, [])
    return(
        <div>
             {state}
        </div>
    )
}