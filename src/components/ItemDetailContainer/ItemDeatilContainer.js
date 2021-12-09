import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { stock } from "../itemListContainer/data/stock";
//Firebase
import { doc,getDoc} from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {
  const [ itemId, setItemId ] = useState([]);
  const {id} = useParams()
  let idNumber = Number(id)


  useEffect(() => {
    //doc recibe dos parametro la base de deato, la coleccion y el id
    const docRef =  doc(db,'productos',id)

    //Hacemos el metodo get de la base de datos
    getDoc(docRef)
     .then(resp=>{
      console.log(resp)
       setItemId({
        id:doc.id,
        ...resp.data()
       })
     })

   
  }, [id]);

  return (
    <div>
      <ItemDetail {...itemId} />
    </div>
  );
};
