import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../../Components/Header'
import './Home.css';
import ProductsGrid from './ProductsGrid';

const Home = ({ cart }) => {

  const [products, setProducts] = useState([]);

  // fetch('http://localhost:3000/api/products')
  //   .then((response) => {
  //     response.json().then((data) => {
  //       console.log(data);
  //     })
  //   })

  //shortcut with these promises -> 

  // fetch('http://localhost:3000/api/products')
  //   .then((response) => {
  //      return response.json();
  //   }).then((data) => {
  //     console.log(data);
  //   })

  //axios -- it is a npm package.
  // It is a cleaner way to request/request data to the backend
  // npm install axios@1.8.4

  useEffect(() => {
    const fetchHomeData = async () => {  // getHoemData = ..
      const response = await axios.get('/api/products');  //API -> Application Programming Interface  
      setProducts(response.data);
    }

    fetchHomeData();
  }, [])

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default Home