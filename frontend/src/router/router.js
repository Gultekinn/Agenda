import SiteRoot from "../SiteRoute/SiteRoot";
import About from "../pages/Site/About/About";
import Basket from "../pages/Site/Basket/Basket";
import Contact from "../pages/Site/Contact/Contact";
import Detail from "../pages/Site/Detail/Detail";
import Events from "../pages/Site/Events/Events";
import Favorite from "../pages/Site/Favorite/Favorite";
import Home from "../pages/Site/Home/Home";
import Login from "../pages/Site/Login/Login";
import News from "../pages/Site/News/News";
import Register from "../pages/Site/Register/Register";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:'basket',
        element:<Basket/>
      },
      {
        path:'favorite',
        element:<Favorite/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'/:id',
        element:<Detail/>
      }
    ],
  },
];
