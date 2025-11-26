import axios from "axios";
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import './App.css'
import OrdersPage from './Pages/Orders/OrdersPage';
import Home from './Pages/Home/Home';
import TrackingPage from './Pages/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, [])

  return (
    <Routes>
      <Route index element={<Home cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>

  );
}

export default App
