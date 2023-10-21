import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../Context/Context";

const Favorite = () => {
  const { favorItem, setFavorItem } = useContext(MainContext);

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
              <button
                onClick={() => {
                  const deleteItem = favorItem.filter(
                    (item) => item.id != item._id
                  );
                  if (deleteItem) {
                    const IndexOfTarget = favorItem.indexOf(deleteItem);
                    const updateFavor = [...favorItem];
                    updateFavor.splice(IndexOfTarget);
                    setFavorItem(updateFavor);
                  }
                }}
              >
                Favorilerden kaldır
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
