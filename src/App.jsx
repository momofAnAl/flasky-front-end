import { useState } from 'react';
import './App.css';
import CatList from './components/CatList';

const DATA = [
  {
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
  },
  {
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
  },
  {
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
  },
  {
    name: 'Luna',
    caretaker: 'Jake',
    color: 'white',
    personality: 'cuddly',
  }
];


function App() {

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <CatList catData={DATA}/>
      </main>
    </>

  );
}

export default App;
