import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { stock } from "../itemListContainer/data/stock";
//Firebase
import { doc,getDoc, collection} from 'firebase/firestore'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {
  const [ itemId, setItemId ] = useState();
  const {id} = useParams()
  let idNumber = Number(id)


  useEffect(() => {
    //doc recibe dos parametro la base de deato, la coleccion y el id
    const dbReference = doc(collection(db,'productos'),id)
    //Hacemos el metodo get de la base de datos
    getDoc(dbReference)
    .then(resp=>{
      setItemId({
        id:id,
        ...resp.data()
      })
    })
  }, [id]);
  
  console.log("ItemDetailContainer:",itemId)

  return (
    <div>
      <ItemDetail {...itemId} />
    </div>
  );
};
