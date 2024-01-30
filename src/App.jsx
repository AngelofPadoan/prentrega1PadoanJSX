import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './components/paginas/Inicio';
import { NavBar } from './components/componentes/NavBar';
import Catalogo from './components/paginas/Catalogo';
import Nosotros from './components/paginas/Nosotros';
import NotFound from './components/paginas/NotFound';
import DetalleProducto from './components/paginas/DetalleDeProducto';
import 'boxicons';
import { useCart } from '../src/components/componentes/CartContext';
import CartWidget from './components/paginas/CartWidget';

function App() {
  const { cartState } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (cartState.cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  }, [cartState]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {/* <AppContent /> */}
        <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/catalogo' element={<Catalogo />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/catalogo/:id' element={<DetalleProducto />} />
        <Route path='/cart' element={<CartWidget isCartOpen={isCartOpen} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

// function AppContent() {
//   return (
//     <>
//       <Routes>
//         <Route exact path='/' element={<Inicio />} />
//         <Route exact path='/catalogo' element={<Catalogo />} />
//         <Route exact path='/nosotros' element={<Nosotros />} />
//         <Route exact path='/catalogo/:id' element={<DetalleProducto />} />
//         <Route path='/cart' element={<CartWidget isCartOpen={isCartOpen} />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

export default App;



