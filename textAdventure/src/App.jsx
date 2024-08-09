import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Game } from './components/Game.jsx';
// import { Header } from './components/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game/:page" element={<Game />} />
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
