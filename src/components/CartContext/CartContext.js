import React, {createContext,useState} from 'react'

export const CartContext = createContext()

//custom provider

export const CartProvider = ({children}) =>{
    
  const [carrito,setCarrito] = useState([])


  const agregarAlCarrito=(item)=>{
    setCarrito([...carrito,item]) //agrega lo que agrego anteriormente mas que lo agrega actualmente
  }

  const removerCarrito = (id) =>{
    setCarrito(carrito.filter((prod)=>{
      return prod.id != id
    }))
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  const totalCompra = () =>{
      return carrito.reduce((acc,val)=>{

        return(
        acc + val.Price * val.clicks
        )
      },0)
  }

  const isInCart = (id) =>{ //sirve para que el producto no se vuelva a repetir pero yo no quiero eso asi que no lo uso
    return carrito.some((prod) => prod.id === id) //recorre el array solo devuelve true o false
  }

  const totalCantidad = () =>{
    return carrito.reduce((acc,val)=> acc + val.clicks,0)
  }

  console.log(children)
    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerCarrito,
            vaciarCarrito,
            isInCart,
            totalCantidad,
            totalCompra
          }}>
              {children}
        </CartContext.Provider>
    )
}