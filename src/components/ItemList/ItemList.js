import React from 'react'
import {Item} from '../Item/Item'


export const ItemList = ({prop}) =>{
                    
    console.log("ItemList:",prop)

    return(
            prop.map((products) =><Item stocks={products}/>)
    )
}
