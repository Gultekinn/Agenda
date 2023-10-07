import React, { useEffect, useState } from 'react'
import "../Card/Card.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";

const Card = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:7075/cards").then((res)=>{
      setData(res.data)
    })
  })
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
      {data.map((item,index)=>(
        <div className="card__one">
            <div className="card__one__img">
            <img
                src={`http://localhost:7075/public/${item.mainimage}`}
                alt="img"
              />
            </div>
            <h1>{item.title}</h1>
            <p>{item.price}tl</p>
            <div className="card__one__top">
                <div className="card__one__top__fav">
                    <FavoriteBorderIcon/> 
                </div>
                <div className="card__one__top__shop">
                <button id='C' >Sepete ekle</button>

                </div>
            </div>

        </div>
      ))}
        
        </div> 
    </>
  )
}

export default Card
