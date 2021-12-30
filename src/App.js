import './App.css';
import Home from "./Home";
import Start from "./Start";
import Header from "./Header";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start favcol="Yellow" Lname="Bhavik Gajdhar" />} />
        </Routes>      
    </div>
  );
}

export default App;
