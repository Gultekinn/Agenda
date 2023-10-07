import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../Header/Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar__logo">
          <img src="https://preview.colorlib.com/theme/agenda/images/logo.png" alt="" />
          
        </div>

        <div className={`navbar__left ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link id='link' to="">Ana sayfa</Link></li>
            <li><Link id='link' to="about">Hakkında</Link></li>
            <li><Link id='link' to="events">Hizmetler</Link></li>
            <li><Link id='link' to="news">Projeler</Link></li>
            <li><Link id='link' to="contact">İletişim</Link></li>
          </ul>
          <div className="navbar__left__icon">
            <Link to="login"><button><PersonIcon /></button></Link>
            <Link to="favorite"><button><FavoriteBorderIcon /></button></Link>
            <Link to="basket"><button><ShoppingCartIcon /></button></Link>
          </div>
        </div>

        <div className="navbar__left__hamburger">
          {isMenuOpen ? (
            <button id="menuicon" onClick={toggleMenu}><CloseIcon /></button>
          ) : (
            <button id="menuicon" onClick={toggleMenu}><MenuIcon /></button>
          )}
        </div>
      </div>

      {/* Yandan açılan menü */}
      {isMenuOpen && (
        <div className={`right-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="">Ana sayfa</Link></li>
            <li><Link to="about">Hakkında</Link></li>
            <li><Link to="events"> Hizmetler</Link></li>
            <li><Link to="news">Projeler</Link></li>
            <li><Link to="contact">İletişim</Link></li>
            <li><div className="navbar__left__icon">
            <Link to="login"><button><PersonIcon /></button></Link>
            <Link to="favorite"><button><FavoriteBorderIcon /></button></Link>
            <Link to="basket"><button><ShoppingCartIcon /></button></Link>
          </div></li>
            <li className="close-button"><button id='closemenu' onClick={toggleMenu}><CloseIcon /></button></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
