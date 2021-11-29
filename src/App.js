import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/itemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDeatilContainer";
import {Footer} from './components/pages/footer/footer'
import {Packs} from './components/pages/packs/packs'
import {HacerEnvio} from './components/pages/hacerEnvio/hacerEnvio'
import {Faq} from './components/pages/faq/faq'
import {Zonas} from './components/pages/zonas/zonas'
import {Login} from './components/pages/login/login'


import { BrowserRouter,Routes,Route } from "react-router-dom";
import { PageNotFound } from "./components/pages/pageNotFound/pageNotFound";
import { CartWidget } from "./components/cartWidget/CartWidget";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        <Routes>                                            
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

          <Route path="/packs" element={<Packs/>}/>
          <Route path="/hacer-envio" element={<HacerEnvio/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/Zonas/:zonId" element={<Zonas/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="carrito" element={<CartWidget/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
