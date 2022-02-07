import logo from "../images/logo3.jpg"
import * as Icon from 'react-bootstrap-icons';

function Header() {
  return <div className="header">
      <img src={logo} alt="Logo" className="logo"/>
      <h3 className="navbar-item"><a  href="/menus">Menus</a></h3>      
      <h3 className="navbar-item"><a  href="/gallery">Gallery</a></h3>
      <h3 className="navbar-item"><a  href="/openinghours">Opening Hours</a></h3>
      <h3 className="navbar-item"><a href="/contact">Contact Us</a></h3>
      <h3 style={{flexGrow:2}}></h3>
      <h3 className="navbar-item" style={{width:"200px", flexGrow:2}}><Icon.Facebook></Icon.Facebook></h3>
      
      </div>
}

export default Header;
