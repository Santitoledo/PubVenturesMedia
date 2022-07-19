import './header.css'
import logo1 from '../assets/img/logo.JPG';

function Header() {
    

    return (
        <div id='header'> 
            <ul>
              <div id="boxImgNav">
                <img src={logo1} alt="logo" id="img1"/>
              </div>
              <div id="boxnav">
                <li><a href="#about">About Us</a></li>
                <li><a href="#title2">Clients</a></li>
                <li><a href="#boxContact">Contact</a></li>
              </div>
            </ul>
        </div>
      )
  }
  

export default Header