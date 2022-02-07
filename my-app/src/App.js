import './App.css';

import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Gallery from './components/Gallery';


function App() {
  return (
    <div >
      
      <Header></Header>
      
      <Router>
        <Routes>
        <Route path="/menus"  element={<Menu></Menu>}/>
        <Route path="/gallery"  element={<Gallery></Gallery>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
