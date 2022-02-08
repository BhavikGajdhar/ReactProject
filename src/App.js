import './App.css';
import Home from "./Home";
import Start from "./Start";
import Header from "./Header";
import Parent from "./Parent";
import {Routes, Route , useLocation , useNavigate } from "react-router-dom";
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import   { EditUser }   from './Component/EditUser';


function App() {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start favcol="Yellow" Lname="Bhavik Gajdhar" />} />
          <Route path="/parent" element={<Parent/>} />
          <Route path="/list" element={<UserList navigate={navigate} location={location}/>}></Route>
          <Route path="/add" element={<AddUser navigate={navigate} location={location}/>}></Route>
          {/* <Route path="/edit/:id" element={<AddUser/>}></Route> */}
          <Route path="/edit/:id" element={<EditUser navigate={navigate} location={location}/>}></Route>
        </Routes>      
    </div>
  );
}

export default App;
