import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../Context/Context";
import "../Favorite/Favorite.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Favorite = () => {
  const { favorItem, setFavorItem } = useContext(MainContext);
  const { basketItem, setBasketItem } = useContext(MainContext);

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
              <button id="comercIcon"
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
                <DeleteIcon/>
              </button>
              <button id="comercIcon" onClick={() => addToBasket(item)}><ShoppingCartIcon/></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
