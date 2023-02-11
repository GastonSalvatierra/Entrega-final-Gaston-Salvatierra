import './App.css';
import './Components/NavBar/NavBar.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './Context/CartProvider';
import Cart from './Pages/Cart/Cart';





function App() {
  return (
<BrowserRouter>

  <CartProvider>
      <NavBar/>
      <Routes>

          <Route path='/' element={<ItemListContainer/>} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element= {<Cart/>} />

      </Routes>

      

  </CartProvider>

</BrowserRouter>


  );
}

export default App;
