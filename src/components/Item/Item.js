import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ stocks }) => {

  const {agregarAlCarrito} = useContext(CartContext)
  const [clicks,setClicks] = useState(1)

  //Carrito
  const [agregar,setAgregado] = useState(false)

  
  const handleAgregar = () =>{
    if(clicks > 0){
      agregarAlCarrito({
        id:stocks.id,// es igual a id : id
        title:stocks.title, //es igual a title:title --> propiedad:valor
        envios:stocks.envios,
        peso:stocks.peso,
        duracion:stocks.duracion,
        Price:stocks.Price,
        pictureURL:stocks.pictureURL,
        clicks //este es la cantidad que queremos osea es como el stock que quiere el usuario  
      })
      setAgregado(true)
    }

    /*
    console.log('Item Agregado',{
      id:stocks.id,// es igual a id : id
      title:stocks.title, //es igual a title:title --> propiedad:valor
      envios:stocks.envios,
      peso:stocks.peso,
      duracion:stocks.duracion,
      Price:stocks.Price,
      pictureURL:stocks.pictureURL,
      clicks //este es la cantidad que queremos osea es como el stock que quiere el usuario      
    })
    setAgregado(true) //para que aparezca el boton Terminar Compra cuando apretemos Agregar
    */
  }



  return (
    <div>
      {
        
          <div className="targetCarrito text-center col-md-4" key={stocks.id}>
            <div className="">
              <div>
              <Link to={`/item/${stocks.id}`} style={{ textDecoration: 'none' }}>
                <h2>{stocks.title}</h2>
              </Link>  
                <img src={stocks.pictureURL} alt="moneda" />
              </div>

              <div className="row">
                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Envios:</h3>
                  <span>{stocks.envios}</span>
                  <h3>Peso:</h3>
                  <span>{stocks.peso}KG</span>
                </div>

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Duracion:</h3>
                  <span>{stocks.duracion}</span>
                </div>

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Zonas</h3>
                  <span>
                    Sur <br /> Norte <br /> Caba{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="precioTarget">
              <h3>Precio:</h3>
              <h2>{stocks.Price}$</h2>
            </div>

            {!agregar ?  <ItemCount stock={stocks.stock} clicks={clicks} setClicks={setClicks} onAdd={handleAgregar} />
                          : <Link to='/carrito' style={{ textDecoration: 'none' }}>Terminar mi compra</Link>
          }
          </div>
        
      }
    </div>
  );
};
