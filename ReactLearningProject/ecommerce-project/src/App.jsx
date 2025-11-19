import { Routes,Route } from 'react-router';
import CheckoutPage from './Pages/CheckoutPage';
import './App.css'
import OrdersPage from './Pages/OrdersPage'
import Home from './Pages/Home';
import TrackingPage from './Pages/TrackingPage';

function App() {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path="orders" element={<OrdersPage/>}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
   
  );
}

export default App
