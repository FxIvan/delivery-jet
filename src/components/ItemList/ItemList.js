import React from 'react'
import {Item} from '../Item/Item'


export const ItemList = ({prop}) =>{
                    
    return(
        <div>{
            prop.map((products) => <Item stocks={products}/>)
            }
        </div>
    )
}
