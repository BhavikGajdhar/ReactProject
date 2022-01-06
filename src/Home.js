import React, {useState, useEffect} from "react";

const Home=(props)=>{
    const [Fname, setName] = useState("");
    const [Lname, setLame] = useState("");
    const [count, setCount] = useState(0);

    function getData(){
        console.log(Fname,Lname);
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
    return(
        <>
            <h1>Home</h1>
            
            <input type="text" onChange={(e) => {setName(e.target.value)}}></input>
            <input type="text" onChange={(e) => {setLame(e.target.value)}}></input>
            {/* <h1>I've rendered {count} times!</h1> */}

            <button onClick={getData}>Submit</button>
        </>

    );
    
        

        // const [count, setRandomCount] = useState();
        // useEffect(() => {
        //     setRandomCount(Math.floor(Math.random() * 100));
        // },[]);
        // function clickHandler() {
        //   setRandomCount(Math.floor(Math.random() * 100));
        // }
        // return (
        //   <div style={{margin: 'auto', width: 100, display: 'block'}}>
        //     <h1> {count} </h1>
              
        //     <p>
        //       <button onClick={clickHandler}> Click </button>
        //     </p>
        
        //   </div>
        // );     
}

export default Home;