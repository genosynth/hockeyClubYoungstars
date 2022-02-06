import logo from "../images/logo3.jpg"
import * as Icon from 'react-bootstrap-icons';

function Header() {
  return <div className="header">
      <img src={logo} alt="Logo" className="logo"/>
      <h3 className="navbar-item">Menus</h3>      
      <h3 className="navbar-item">Gallery</h3>
      <h3 className="navbar-item">Opening Hours</h3>
      <h3 className="navbar-item">Contact Us</h3>
      <h3 style={{flexGrow:2}}></h3>
      <h3 className="navbar-item" style={{width:"200px", flexGrow:2}}><Icon.Facebook></Icon.Facebook></h3>
      
      </div>
}

export default Header;
