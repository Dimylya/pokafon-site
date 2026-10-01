import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, NavLink } from "react-router";
import './index.css'
import App from './App.jsx'
import Catalog from './components/Catalog.jsx';
import { ThemeContext, ThemeProvider } from './context/theme.jsx';
import { ThemeSwitcher } from './components/ThemeSwitcher.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
  
    <Header />
  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/catalog' element={<Catalog />} />
    </Routes>
    
    <Footer />

  </BrowserRouter>,
  </ThemeProvider>
)
