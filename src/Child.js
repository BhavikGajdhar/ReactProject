import React  from "react";
  
function Child(props){

    return(
        <>
           <button onClick={()=>props.greetHandler('bhavik here')}>Greet Parent</button> 
        </>
    )
}
export default Child;