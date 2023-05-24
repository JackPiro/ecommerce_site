import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ItemDetail from './views/ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = { <Home /> } path='/home' />
          <Route element = { <ItemDetail /> } path='/item-detail/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
