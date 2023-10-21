import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import { MainContext } from "../../../Context/Context";

const Detail = () => {
  const { id } = useParams();
  const [item, setData] = useState({});
  const { basketItem, setBasketItem } = useContext(MainContext);
  const { favorItem, setFavorItem } = useContext(MainContext);
  
  useEffect(() => {
    axios.get(`http://localhost:7075/cards/${id}`).then((res) => {
      setData(res.data);
    });
  });
// !const addToFavor = (item) => {
// !    const existingItem = favorItem.find((favortItem) => favorItem._id === item._id);}
  return (
    <div className="container">
      <div className="image">
        <img src={`http://localhost:7075/public/${item.mainimage}`} alt="img" />
      </div>
      <div className="details">
        <h1 className="detail_h">{item.title}</h1>
        <p className="detail_p">{item.price}tl</p>
        <button>Sepete ekle</button>
        <button  onClick={() => {
                    setFavorItem([...favorItem, item])}}>Favorilere ekle</button>
      </div>
    </div>
  );
};

export default Detail;
