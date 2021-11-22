import React, {useState} from 'react'


export const ItemCount = ({stock}) =>{

    const [clicks,setClicks] = useState(1)

    let restarClick =()=>{
        if(clicks > 1){
        setClicks(clicks - 1)
        console.log(clicks)
        }else{
            alert("No se puede quitar mas producto")
        }
    }

    let sumarClick=()=>{  
        if(stock>clicks){
            setClicks(clicks + 1)
        }else{
            alert("No hay mas stock")
        }
    }



    return(
        <div>
            <div className="row d-flex justify-content-evenly">
                <h2>{clicks}</h2>
                <button className="col-2" onClick={sumarClick} type="button">+</button>
                <button className="col-2" onClick={restarClick} type="button">-</button>
            </div>
                <button className='col-2'>Comprar</button>
        </div>
    )
}