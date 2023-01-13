import './App.css';
import './Components/NavBar/NavBar.css';
import ItemListContainer from './Pages/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Counter from './Components/Counter/Counter'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <ItemListContainer greeting="Saludo de prueba en React Js"/>
        <Counter/>

      </header>

    </div>
  );
}

export default App;
