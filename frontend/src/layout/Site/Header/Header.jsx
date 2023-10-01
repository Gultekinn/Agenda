import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import '../Header/Header.scss';

const Header = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar__logo">
        <img src="https://preview.colorlib.com/theme/agenda/images/logo.png" alt="" />
      </div>
  
      <div className="navbar__left">    
       <ul>
        <li><Link id='link' to="">Ana sayfa</Link></li>
        <li><Link  id='link' to="about">Hakkında</Link></li>
        <li><Link id='link'  to="events">Hizmetler</Link></li>
        <li><Link id='link'  to="news">Projeler</Link></li>
        <li><Link  id='link' to="contact">İletişim</Link></li>
      </ul>
      <div className="navbar__left__icon">
        <Link to="login"> <button><PersonIcon/></button></Link>
    <Link to="favorite"><button><FavoriteBorderIcon/></button></Link> 
<Link to="basket"><button><ShoppingCartIcon/></button></Link>
      </div>
       
      </div>

<div className="navbar__left__hamburger">
<MenuIcon id="menuicon"/>
</div>

    </div>
     
    </>
  )
}

export default Header
