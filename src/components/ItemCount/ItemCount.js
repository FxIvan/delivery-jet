import React from 'react'


export const ItemCount = ({stock,clicks,setClicks,onAdd}) =>{
    const restarClick = () =>{
        clicks > 0 && setClicks(clicks - 1)
    }

    const sumarClick = () =>{
        stock > clicks && setClicks(clicks + 1)
    }

    const handleCompra = () =>{

    }




    return(
        <div>
            <div className="row d-flex justify-content-evenly">
                <h2>{clicks}</h2>
                <button className="col-2" onClick={sumarClick} type="button">+</button>
                <button className="col-2" onClick={restarClick} type="button">-</button>
            </div>
                <button className='col-2' onClick={onAdd}>Agregar</button>
                <button className='col-2' onSubmit={handleCompra}>Comprar</button>
        </div>
    )
}