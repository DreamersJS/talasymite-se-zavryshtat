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
    healthy: true,
    sick: false,
    injuredWithFork: false,
  });
  const [bagHolder, setBagHolder] = useState('');
  const [magicMushrooms, setMagicMushrooms] = useState({
    yellow: 0,
    blue: 0,
    red: 0,
    green: 0,
    black: 0,
  });

  return (
    <>
      <div id='text'>
        <p>
          <p>{bookData[page].text}</p>
        </p>
        <div id='choices'>
          {choices.map((choice, index) => { <button key={index}> {choice} </button> })}
        </div>
        {bookData[page].moreText && <p>{bookData[page].moreText}</p>}
      </div>

    </>
  )
}

export default App
