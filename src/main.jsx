import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import OrderReview from './Component/OrderReview/OrderReview.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('tshirts.json')
        // loader: () => fetch('tshirts.json').then(response => response.json())

      },
      {
        path:"/review",
        element:<OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
