import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './App.css';


function Header() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
       <button> <NavLink to="/home">Home</NavLink></button>
       <button><NavLink to="/start">Start</NavLink></button>
       <button><NavLink to="/parent">Parent</NavLink></button>
       <button><NavLink to="/list">UsreList</NavLink></button>
      </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
export default Header;
