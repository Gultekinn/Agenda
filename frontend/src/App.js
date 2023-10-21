import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { MainContext } from './Context/Context';
import { ROUTES } from './router/router';

function App() {
  const [basketItem, setBasketItem] = useState([]);
  const [favorItem, setFavorItem] = useState([]); // Değişken adını düzeltin (SetFavorItem -> setFavorItem)

  const contextData = {
    basketItem,
    setBasketItem,
    favorItem,
    setFavorItem, // Düzeltildi
  };

  const router = createBrowserRouter(ROUTES);

  return (
    <div className="App">
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </div>
  );
}

export default App;
