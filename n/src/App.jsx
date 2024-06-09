import { useState } from 'react'
import bookData from './data/bookData.js'
import './App.css'

function App() {
  const [health, setHealth] = useState(0);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [choices, setChoices] = useState([]);
  const [inventory, setInventory] = useState({});
  const [healthCondition, setHealthCondition] = useState({
    healthy : true,
    sick : false,
    injuredWithFork : false,
  });
  const [bagHolder, setBagHolder] = useState('');
  const [magicMushrooms, setMagicMushrooms] = useState({
    yellow : 0,
    blue : 0,
    red : 0,
    green : 0,
    black : 0,
  });

  const addToInventory = (item, quantity) => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      [item]: (prevInventory[item] || 0) + quantity,
    }));
  };
  
  const removeFromInventory = (item, quantity) => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      [item]: Math.max((prevInventory[item] || 0) - quantity, 0),
    }));
  };
  
  function showPage(page) {
    setPage(page);
    setChoices(bookData[page].choices);
    setNextPage(bookData[page].nextPage);
  }


  return (
    <>
      <div id='text'>
        <p>
        {page.map((p) => {p.text})}
        </p>
        <div id='choices'>
          {choices.map((choice) => {<button> {choice} </button>})}
        </div>
        {page.moreText && <p>{page.moreText}</p>}
      </div>

    </>
  )
}

export default App
