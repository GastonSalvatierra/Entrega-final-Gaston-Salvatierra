import './App.css';
import './Components/NavBar/NavBar.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {
  return (
<BrowserRouter>
<NavBar/>

  <Routes>
     <Route path='/' element={<ItemListContainer greeting="Saludo de prueba en React Js"/>} />
     <Route path='/category/:category' element={<ItemListContainer />} />
    <Route path='item/:id' element={<ItemDetailContainer/>} />


  </Routes>
</BrowserRouter>




 /*    <div className="App">
      <header className="App-header">
        
        

      </header>

    </div> */
  );
}

export default App;
