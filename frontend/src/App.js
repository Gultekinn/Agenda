import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './router/router';
import { useState } from 'react';
import { MainContext } from './Context/Context';

function App() {
  const[basketItem,setBasketItem]=useState([])
  const datas={
    basketItem,
    setBasketItem
  }
  const router=createBrowserRouter(ROUTES)
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
             <RouterProvider router={router}/>

      </MainContext.Provider>
    </div>
  );
}

export default App;
