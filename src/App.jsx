import { useState } from 'react';
import './App.css';
import CatList from './components/CatList';

const DATA = [
  {
    id: 1,
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
    petCount: 1,
  },
  {
    id: 2,
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
    petCount: 0,
  },
  {
    id: 3,
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
    petCount: 0,
  },
  {
    id: 4,
    name: 'Luna',
    caretaker: 'Jake',
    color: 'white',
    personality: 'cuddly',
    petCount: 0,
  }
];


function App() {
  const [catData, setCatData] = useState(DATA);

  const handlePetCat = (id) => {
    // console.log(`we pet ${id} cat`);
    // update the cat
    setCatData(catData => catData.map(cat => {
      if (cat.id === id) {
        // update pet count
        return { ...cat, petCount: cat.petCount + 1 };
      } else {
        // no change to this cat
        return cat;
      }
    }));

    // const newCatData = catData.map(cat => {
    //   if (cat.id === id) {
    //     // update pet count
    //     return { ...cat, petCount: cat.petCount + 1 };
    //   } else {
    //     // no change to this cat
    //     return cat;
    //   }
    // });
    // setCatData(newCatData);
  };

  const handleUnregisterCat = (id) => {
    setCatData(catData => catData.filter(cat => {
      return cat.id !== id;
    }));
  };

  // const calculateTotalPetCount = (catData) => {
  //   let total = 0;
  //   for (const cat of catData) {
  //     total += cat.petCount;
  //   }
  //   return total;
  // };

  const calculateTotalPetCount = (catData) => {
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, 0);
  };

  const totalPets = calculateTotalPetCount(catData);

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <h2>Total Number of Pets Across All Cats: {totalPets}</h2>
        <CatList
          catData={catData}
          onPetCat={handlePetCat}
          onUnregisterCat={handleUnregisterCat}
        />
      </main>
    </>

  );
}

export default App;
