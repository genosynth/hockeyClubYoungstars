import logo from "../images/logolionedit.jpg"
import * as Icon from 'react-bootstrap-icons';
import React, {useState, useEffect} from "react";

function Header() {

  const [css, toggle] = useState("navbar-item")
  const [width, changeWidth] = useState(window.innerWidth)
  
  useEffect(() => {

    function handleResize(){
    changeWidth(window.innerWidth);
    width>850 ? toggle("navbar-item") : console.log()
    }

    window.addEventListener('resize', handleResize)
  }, []); 

  const toggleClass = () =>{
    css==="navbar-item"? toggle("navbar-item.active") : toggle("navbar-item")
    
  }


  return <div className="header">
      <img src={logo} alt="Logo" className="logo"/>
      <a href="#" className="toggle-button" onClick={()=>{
        toggleClass()
        //console.log(window.innerWidth)
      }}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <h3 className={css}><a  href="/menus">Menus</a></h3>      
      <h3 className={css}><a  href="/gallery">Gallery</a></h3>
      <h3 className={css}><a  href="/openinghours">Opening Hours</a></h3>
      <h3 className={css}><a href="/contact">Contact</a></h3>
      
      <h3 className="navbar-item" style={{width:"200px", flexGrow:1}}><a href="https://www.facebook.com/FlorianaHockeySnackDine/" target="_blank"><Icon.Facebook></Icon.Facebook></a></h3>
      
      </div>
}

export default Header;
