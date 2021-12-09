import React,{useState,useEffect} from 'react'
import './style.css'
import {stock} from './data/stock'
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router'
//Firebase
import { collection,getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../firebase/config'


export const ItemListContainer = () =>{
    
    const [productos,setProductos] = useState ([])

    let { catId }= useParams()  

    console.log(catId)
    useEffect(() => {

        //1. Armo la referencia
        const productoRef = collection(db,'productos')
        //const q = query(productoRef, where('category','==',catId))
        // 2 . Metodo GET a esa referencia
        getDocs(productoRef)
        .then(resp=>{
            const items = resp.docs.map(item =>({
                id:item.id,
                ...item.data()
            })) //accedemos al dato de los documentos
            setProductos(items)
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