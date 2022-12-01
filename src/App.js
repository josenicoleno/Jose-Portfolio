import React, { useState, useEffect } from 'react';
import { CartContextProvider } from './context/cartContext'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import ThankYouPage from './components/ThankYouPage';
import AboutUs from './components/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getCart } from './firebase/firebase'
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([])
  /*trae los datos del carrito */
  useEffect(() => {
    getCart()
      .then((snp) => {
        setCarrito(
          snp.docs.map((document) => ({
            ...document.data(),
            id: document.id
          }))
        )
      })
  }, [])
  
  return (
    < CartContextProvider products={carrito}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<ItemListContainer />} />
          <Route path='productos/:id' element={<ItemDetailContainer />} />
          <Route path='carrito' element={<ItemCartContainer />} />
          <Route path='sobre-nostros' element={<AboutUs />} />
          <Route path='thank-you-page' element={<ThankYouPage/>}></Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider >
  );
}

export default App;
