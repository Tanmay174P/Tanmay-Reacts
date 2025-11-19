import { Routes,Route } from 'react-router';
import './App.css'
import Home from './Pages/Home';

function App() {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<div>New Route Testing Page</div>}></Route>
    </Routes>
   
  );
}

export default App
