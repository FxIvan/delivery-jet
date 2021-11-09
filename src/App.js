import React from 'react'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from '../src/components/itemListContainer/ItemListoContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer title="PACK DIAMANTE" titleDescription="10 Envios" description="10 envios dentro de zona sur, norte y CABA" price="1.500$"/>
    </div>
  );
}

export default App;
