import { Routes,Route } from 'react-router';
import CheckoutPage from './Pages/CheckoutPage';
import './App.css'
import Home from './Pages/Home';

function App() {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<CheckoutPage />}></Route>
    </Routes>
   
  );
}

export default App
