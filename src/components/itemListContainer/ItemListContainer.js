import React from 'react'


export const ItemListContainer = ({title,titleDescription,description,price}) =>{
    return(
        <div className="card">            
            <div className="card-header bg-transparent">{title}</div>
            <div className="card-body">
            <h5 className="card-title">{titleDescription}</h5>
            <p className="card-text">{description}</p>
            </div>
            <div className="card-footer bg-transparent">{price}</div>
        </div>
    )
}