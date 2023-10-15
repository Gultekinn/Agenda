import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../Context/Context';
import './Basket.scss';

const Basket = () => {
  const { basketItem, setBasketItem } = useContext(MainContext);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isThankYouModalOpen, setThankYouModalOpen] = useState(false);

  useEffect(() => {
    const savedBasket = JSON.parse(sessionStorage.getItem('basket')) || [];
    setBasketItem(savedBasket);
  }, [setBasketItem]);

  useEffect(() => {
    sessionStorage.setItem('basket', JSON.stringify(basketItem));
  }, [basketItem]);

  const handleDelete = (itemId) => {
    const updatedBasket = basketItem.filter((item) => item._id !== itemId);
    setBasketItem(updatedBasket);
  };

  const handleIncrement = (itemId) => {
    const updatedBasket = basketItem.map((item) => {
      if (item._id === itemId) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        updatedItem.totalPrice = updatedItem.quantity * updatedItem.price;
        return updatedItem;
      }
      return item;
    });
    setBasketItem(updatedBasket);
  };

  const handleDecrement = (itemId) => {
    const updatedBasket = basketItem.map((item) => {
      if (item._id === itemId && item.quantity > 1) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        updatedItem.totalPrice = updatedItem.quantity * updatedItem.price; // Düzgün çarpma işareti eklenmiştir.
        return updatedItem;
      }
      return item;
      
    });
    setBasketItem(updatedBasket);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of basketItem) {
      total += item.totalPrice;
    }
    return total;
  };

  // "Siparişi Tamamla" düğmesine tıklandığında ödeme modalını aç
  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  // Ödeme modalını kapat ve teşekkür modalını aç
  const completePayment = () => {
    setPaymentModalOpen(false);
    setThankYouModalOpen(true);
  };

  return (
    <div className="basket-container">
      <h1>Sepetiniz</h1>
      <div className="basket-items">
        {basketItem.map((item, index) => (
          <div className="basket-item" key={item._id}>
            <img
              src={`http://localhost:7075/public/${item.mainimage}`}
              alt="img"
              className="item-image"
            />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>Fiyat: {item.price}tl</p>
              <div className="counter">
                <button onClick={() => handleDecrement(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item._id)}>+</button>
              </div>
              <button onClick={() => handleDelete(item._id)}>Sil</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Toplam Tutar: {calculateTotalPrice()}tl</h2>
        <button onClick={openPaymentModal}>Siparişi Tamamla</button>
      </div>

      {isPaymentModalOpen && (
        <div className="payment-modal">
          {/* Ödeme işlemi için modal içeriği */}
          <h2>Ödeme İşlemi</h2>
          {/* Ödeme işlemi adımları, form alanları, vb. */}
          <button onClick={completePayment}>Ödemeyi Tamamla</button>
        </div>
      )}

      {isThankYouModalOpen && (
        <div className="thank-you-modal">
          {/* Teşekkür mesajı veya başka bir içerik */}
          <h2>Teşekkür ederiz!</h2>
        </div>
      )}
    </div>
  );
};

export default Basket;
