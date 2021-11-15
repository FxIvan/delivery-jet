import React from 'react'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from '../src/components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
