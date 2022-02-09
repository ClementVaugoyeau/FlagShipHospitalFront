import logo from './logo.svg';
import './App.scss';
import CreatePatient from './CreatePatient/CreatePatient';
import CreateUser from './CreateLogin/CreateUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1> FlagShip Hospital</h1>
        <CreateUser/>
        <CreatePatient/>
        
      </header>
    </div>
  );
}

export default App;
