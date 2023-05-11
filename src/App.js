import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Styles/CartWidget.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { CartProvider } from './components/context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={ <ItemListContainer />} />
                <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
              </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
