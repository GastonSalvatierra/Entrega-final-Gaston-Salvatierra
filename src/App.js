import './App.css';
import './Components/NavBar.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

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
