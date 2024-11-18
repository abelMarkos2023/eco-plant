import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import App from './App.jsx'
import './App.css'
import { Provider } from 'react-redux';
import store from './store.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
