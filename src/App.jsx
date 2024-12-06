import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CatList from './components/CatList';

function App() {

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <CatList />
      </main>
    </>

  );
}

export default App;
