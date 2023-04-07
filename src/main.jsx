import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './componets/Main/Main';
import OrderReview from './componets/OrderReview/OrderReview';
import Home from './componets/Home/Home';
import Grandpa from './componets/Grandpa/Grandpa';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json'),
      },
      {
        path: 'order',
        element: <OrderReview></OrderReview>,

      },
      {
        path: '/grandpa',
        element: <Grandpa />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
