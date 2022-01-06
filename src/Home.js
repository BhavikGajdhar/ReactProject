import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';

const Home=(props)=>{
    const [Fname, setName] = useState("");
    const [Lname, setLame] = useState("");
    //const [count, setCount] = useState(0);
    const [count, setRandomCount] = useState();
    const [data, setData] = useState(null);

    function getData(){
        console.log(Fname,Lname);
    }
    function clickHandler() {
        setRandomCount(Math.floor(Math.random() * 100));
      } 

    // setMyName = () =>{
    //     this.setState({Fname : 'Bhavik'});
    //     setName("bhavik")
    // }
    // useEffect(() => {
    //     setTimeout(() => {
    //     setCount((count) => count + 1);
    //     }, 1000);
    // });
    useEffect(() => {
        setRandomCount(Math.floor(Math.random() * 100));
    },[]);
    useEffect(async() => {
      // fetch("https://jsonplaceholder.typicode.com/todos")
      //   .then((res) => res.json())
      //   .then((data) => setData(data));
      const url = 'https://jsonplaceholder.typicode.com/todos';
      const res = await fetch(url);
      const res_data = await res.json();
      setData(res_data);
    }, []);
    return(
        <>
            <h1>Home</h1>
            <nav>
            <button><NavLink to="/start">Start</NavLink></button>
            </nav>
            <input type="text" onChange={(e) => {setName(e.target.value)}}></input>
            <input type="text" onChange={(e) => {setLame(e.target.value)}}></input>
            {/* <h1>I've rendered {count} times!</h1> */}

            <button onClick={getData}>Submit</button>
            <div style={{margin: 'auto', width: 100, display: 'block'}}>
            <h1> {count} </h1>
              
            <p>
              <button onClick={()=>clickHandler()}> Click </button>
            </p>
        
          </div>
          {data &&
        data.map((item) => {
          return <p key={item.id}>{item.id}--{item.title}</p>;
        })}
        </>

    );  
}

export default Home;