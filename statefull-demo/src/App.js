import logo from './logo.svg';
import './App.css';
import Greet from './_components/greet';
import Header from './_components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header orgName="Milind's"/>
        <Greet name='Ramesh' nickName="Ram"> <p>This is a First Org </p></Greet>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
