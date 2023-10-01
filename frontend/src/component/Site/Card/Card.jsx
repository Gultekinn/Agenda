import React from 'react'
import "../Card/Card.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card = () => {
  return (
    <>
    <div className="Hero__Card">
<div className="Hero__Card__right">
<h1>Latest Products</h1>
</div>
<div className="Hero__Card__left">
<ul>
  <li>All</li>
  <li>New</li>
  <li>Featured</li>
  <li>Offer</li>
</ul>
</div>

    </div>
    <hr />
     <div className="card">
        <div className="card__one">
            <div className="card__one__img">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkIdLD_5fl0npHATg0b-DiADjiYCSLvTW4Q1PqSPFTQ&s" alt="" />
            </div>
            <h1>Name</h1>
            <p>Price</p>
            <div className="card__one__top">
                <div className="card__one__top__fav">
                    <FavoriteBorderIcon/> 
                </div>
                <div className="card__one__top__shop">
                <button id='C' >Sepete ekle</button>

                </div>
            </div>

        </div>
        </div> 
    </>
  )
}

export default Card
