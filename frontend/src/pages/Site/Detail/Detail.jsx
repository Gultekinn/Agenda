import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import { MainContext } from "../../../Context/Context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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

  
  const addToBasket = (item) => {
    const existingItem = basketItem.find(
      (basketItem) => basketItem._id === item._id
    );

    if (existingItem) {
      // Eğer ürün zaten sepette ise sadece miktarını artır
      const updatedBasket = basketItem.map((basketItem) => {
        if (basketItem._id === item._id) {
          return { ...basketItem, quantity: basketItem.quantity + 1 };
        }
        return basketItem;
      });
      setBasketItem(updatedBasket);
    } else {
      // Ürün sepette yoksa ekleyin ve miktarını 1 olarak ayarlayın
      setBasketItem([...basketItem, { ...item, quantity: 1 }]);
    }
  };
// !const addToFavor = (item) => {
// !    const existingItem = favorItem.find((favortItem) => favorItem._id === item._id);}
const isFavorited = (item) =>
favorItem.some((favItem) => favItem._id === item._id);

const addToFavor = (item) => {
if (isFavorited(item)) {
  // Eğer ürün favorilerde ise, bu ürünü favorilerden kaldır
  setFavorItem(favorItem.filter((favItem) => favItem._id !== item._id));
} else {
  // Ürün favorilerde değilse, bu ürünü favorilere ekle
  setFavorItem([...favorItem, item]);
}
};

return (
    <div className="container">
      <div className="image">
        <img src={`http://localhost:7075/public/${item.mainimage}`} alt="img" />
      </div>
      <div className="details">
        <h1 className="detail_h">{item.title}</h1>
        <p className="detail_p">{item.price}tl</p>
        <button onClick={() => addToBasket(item)}>Sepete ekle</button>
        <button id="btnnn" onClick={() => addToFavor(item)}>
                  {isFavorited(item) ? (
                    <FavoriteIcon id="icona" color="error" /> // Red heart icon when favorited
                  ) : (
                    <FavoriteBorderIcon  id="icona"/> // Default heart icon when not favorited
                  )}
                </button>
      </div>
    </div>
  );
};

export default Detail;
