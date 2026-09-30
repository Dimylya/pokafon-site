import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, NavLink } from "react-router";
import './index.css'
import App from './App.jsx'
import Catalog from './components/Catalog.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <header>
    <h1>PoKaFoN</h1>
    <ul>
      <li><NavLink to= "/">Главная</NavLink></li>
      <li><NavLink to="/catalog" >Каталог</NavLink></li>
    </ul>
  </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/catalog' element={<Catalog />} />
    </Routes>
    <footer>
      <p>&copy; PoKaFoN Все права защищены</p>
    </footer>
  </BrowserRouter>,
)
