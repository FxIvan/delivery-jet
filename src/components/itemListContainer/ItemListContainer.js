import React,{useState,useEffect} from 'react'
import './style.css'
import {stock} from './data/stock'
import {ItemList} from '../ItemList/ItemList'


export const ItemListContainer = () =>{
    
    const [productos,setProductos] = useState ([])
    useEffect(() => {

        /* esto podemos utilizar como componente */
        const pedirDatos = () =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(stock)
                },3000)
            })
        }
        /* esto podemos utilizar como componente */


        /* RESPUESTA */
        pedirDatos()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch((err)=>{
            setProductos(err)
        })

    }, [])
    return(
        <div className="">
            <ItemList prop={productos}/>
        </div>
    
       
    )
}