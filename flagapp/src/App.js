import logo from './logo.svg';
import './App.scss';
import CreatePatient from './CreatePatient/CreatePatient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1> FlagShip Hospital</h1>
        <CreatePatient/>
        
      </header>
    </div>
  );
}

export default App;
