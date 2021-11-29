import React,{useState,useEffect} from 'react'
import './style.css'
import {stock} from './data/stock'
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router'


export const ItemListContainer = () =>{
    
    const [productos,setProductos] = useState ([])

    let { catId }= useParams()  

    console.log(catId)
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
            if(!catId){
            setProductos(resp)
            }else{
                setProductos(
                    resp.filter(prod=>{
                    return(
                    prod.category === catId
                    )
                }))
            }
        })
        .catch((err)=>{
            setProductos(err)
        })

    }, [catId])
    return(
        <div className="">
            {
            <ItemList prop={productos}/>
            }
        </div>
    
       
    )
}