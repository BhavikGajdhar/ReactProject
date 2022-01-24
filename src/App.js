import './App.css';
import Home from "./Home";
import Start from "./Start";
import Header from "./Header";
import Parent from "./Parent";
import {Routes, Route} from "react-router-dom";
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start favcol="Yellow" Lname="Bhavik Gajdhar" />} />
          <Route path="/parent" element={<Parent/>} />
          <Route path="/list" element={<UserList/>}></Route>
          <Route path="/add" element={<AddUser/>}></Route>
          <Route path="/edit/:id" element={<AddUser/>}></Route>
        </Routes>      
    </div>
  );
}

export default App;
