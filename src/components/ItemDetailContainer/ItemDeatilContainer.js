import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { stock } from "../itemListContainer/data/stock";

export const ItemDetailContainer = () => {
  const [ itemId, setItemId ] = useState([]);
  const {id} = useParams()
  let idNumber = Number(id)


  useEffect(() => {
    const items = () => {
      return new Promise((resolve, reject) => {
          
        resolve(stock);
        reject(() => {
          setItemId(<h1>Error en la Pagina</h1>);
          console.log("Error en la Pagina");
        });
          
      });
    };

    items()
      .then((resp) => { //Funciona

          setItemId(resp.find(proId=>{  
            //console.log(typeof(idNumber)) //dato Numero
            //console.log(typeof(proId.id)) //dato Numero
            return(
                proId.id === idNumber
              )
          }))
      })
      .catch(err => {
        setItemId(err)
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...itemId} />
    </div>
  );
};
