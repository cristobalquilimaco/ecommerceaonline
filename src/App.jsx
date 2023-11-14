import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllProductsThunk } from './store/slices/products.slices';

import Home from './pages/Home';
import Header from './components/shared/Header';
import ProductId from './pages/ProductId';
import Register from './pages/Register';
import Purchases from './pages/Purchases';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/shared/Footer';
import LoadingPage from './components/LoadingPage';


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk())
      .then(() => setLoadingComplete(true))
      .catch(() => setLoadingComplete(true));
  }, [dispatch]);

  // Mostrar el componente de carga hasta que la carga haya finalizado
  if (!loadingComplete) {
    return <LoadingPage />;
  }
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
