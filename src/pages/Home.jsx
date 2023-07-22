import React, { useState , useEffect} from 'react'
import axios from "axios"
import Header from '../components/Header';
const Home = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
      getDataFromApi();
    }, [])
    
    const getDataFromApi = ()=>{
        axios("https://fakestoreapi.com/products")
        .then(response => setProducts(response.data))
        .catch(err => console.log(err))
        
    }
    console.log(products);

  return (
    <div>
    <Header/>
    </div>
  )
}

export default Home;