import './App.css';

import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OpeningHours from './components/OpeningHours';
import Contact from './components/Contact'

function App() {
  return (
    <div >
      
      <Header></Header>
      
      <Router>
        <Routes>
        <Route path="/menus"  element={<Menu></Menu>}/>
        <Route path="/gallery"  element={<Gallery></Gallery>}/>  
        <Route path="/openinghours"  element={<OpeningHours></OpeningHours>}/> 
        <Route path="/contact"  element={<Contact></Contact>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
