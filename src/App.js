import './App.css';
import './Components/NavBar/NavBar.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <ItemListContainer greeting="Saludo de prueba en React Js"/> 

      </header>

    </div>
  );
}

export default App;
