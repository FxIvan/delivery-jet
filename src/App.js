import React, { useState,useContext } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDeatilContainer";
import { Footer } from "./components/pages/footer/footer";
import { Packs } from "./components/pages/packs/packs";
import { HacerEnvio } from "./components/pages/hacerEnvio/hacerEnvio";
import { Faq } from "./components/pages/faq/faq";
import { Zonas } from "./components/pages/zonas/zonas";
import { Login } from "./components/pages/login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./components/pages/pageNotFound/pageNotFound";
import { CartWidget } from "./components/cartWidget/CartWidget";
import { CartProvider, CartContext } from "./components/CartContext/CartContext";
import { CartView } from "./components/CartView/CartView";
import {Checkout} from './components/Checkout/Checkout'
import { Usuario } from "./components/pages/login/usuario";

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>{/* apartir de aca son los children de CartProvider */}
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/packs" element={<Packs />} />
            <Route path="/hacer-envio" element={<HacerEnvio />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/zonas/:zonId" element={<Zonas />} />
            <Route path="/login" element={<Login />} />
            <Route path='/usuario' element={<Usuario/>}/>
            <Route path="*" element={<PageNotFound />} />
            <Route path="carrito" element={<CartView />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
            <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
