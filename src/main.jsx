import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './components/Home.jsx'
import ProductDetails, {loader as productLoader} from './components/ProductDetails.jsx'
import About from './components/about.jsx'
import Contact from "./components/Contact.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/products",
        element: <h1>Products page</h1>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails/>,
        loader: productLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
