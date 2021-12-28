import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { db } from '../../firebase/config'

export const Zonas = () =>{

    const {zonId} = useParams()
    const [datos,setDatos] = useState([])

    const zonaRef = collection(db,'zonas')


    useEffect(()=>{
        getDocs(zonaRef)
        .then(resp=>{
            resp.docs.map(zona=>{
                if(zona.data().zonaNombre === zonId){
                    setDatos(zona.data())
                }
            })
        })
    },[zonId])
    return(
        <div className='container zonas-container'>
            <div className='text-center mt-5'>
                <h2>{datos.title}</h2>
            </div>
            <div className='text-center mt-5'>
                <p>{datos.descripcion}</p>
            </div>
        </div>
    )
}