import logo from './logo.svg';
import './App.css';

import MyConditional from './_components/conditional';
import MyList from './_components/MyList';

import MyListAdv from './_components/MyListAdv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyConditional />
        <MyList />
        <MyListAdv />
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
