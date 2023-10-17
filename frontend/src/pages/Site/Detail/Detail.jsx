import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const [item, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:7075/cards/${id}`).then((res) => {
      setData(res.data);
    });
  });

  return (
    <div className="container">
      <div className="image">
        <img src={`http://localhost:7075/public/${item.mainimage}`} alt="img" />
      </div>
      <div className="details">
        <h1 className="detail_h">{item.title}</h1>
        <p className="detail_p">{item.price}tl</p>
        <button>Add to Cart</button>
        <button>Like</button>
      </div>
    </div>
  );
};

export default Detail;
