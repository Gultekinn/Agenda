import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../Context/Context";

const Favorite = () => {
  const { favorItem, setFavortItem } = useContext(MainContext);

  return (
    <div>
      {favorItem.map((item, index) => {
        return (
          <div className="basket-item" key={index}>
            <img
              src={`http://localhost:7075/public/${item.mainimage}`}
              alt="img"
              className="item-image"
            />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>Fiyat: {item.price}tl</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
