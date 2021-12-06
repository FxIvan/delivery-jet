import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

//id,title,envios,peso,duracion,Price,pictureURL
export const ItemDetail = ({ id,title,envios,peso,duracion,Price,pictureURL,category,stock }) => {
  
  const [clicks,setClicks] = useState(1)

  const {agregarAlCarrito, isInCart} = useContext(CartContext)

  //Carrito

  const handleAgregar = () =>{
      if(clicks>0){
        agregarAlCarrito({
          id,
          title,
          Price,
          clicks
        })
      }
  }

  return (
    <div key={id}>
      
      <div className="targetCarrito text-center col-md-4">
            <div className="">
              <div>

              <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <h2>{title}</h2>
              </Link>
              
                <img src={pictureURL} alt="moneda" />
              </div>

              <div className="row">
                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Envios:</h3>
                  <span>{envios}</span>
                  <h3>Peso:</h3>
                  <span>{peso}KG</span>
                </div>

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Duracion:</h3>
                  <span>{duracion}</span>
                </div>

                <div className="col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
                  <h3>Zonas</h3>
                  <span>
                    Sur <br /> Norte <br /> Caba
                  </span>
                </div>
              </div>
            </div>

            <div className="precioTarget">
              <h3>Precio:</h3>
              <h2>{Price}$</h2>
            </div>
            {!isInCart(id) ?  <ItemCount stock={stock} clicks={clicks} setClicks={setClicks} onAdd={handleAgregar} />
                          : <Link to='/carrito' style={{ textDecoration: 'none' }}>Terminar mi compra</Link>
          }
          </div>
      
    </div>
  );
};
