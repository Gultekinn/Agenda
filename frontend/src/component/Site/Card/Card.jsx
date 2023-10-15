import React, { useContext, useEffect, useState } from 'react';
import "../Card/Card.scss";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import { MainContext } from '../../../Context/Context';

const Card = () => {
  const { basketItem, setBasketItem } = useContext(MainContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7075/cards")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Veri alımı sırasında bir hata oluştu:", error);
      });
  }, []);

  const addToBasket = (item) => {
    const existingItem = basketItem.find((basketItem) => basketItem._id === item._id);
    
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
        {data.map((item, index) => (
          <div className="card__one" key={item._id}>
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
                <button id='btn1' onClick={() => addToBasket(item)}>Sepete ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
