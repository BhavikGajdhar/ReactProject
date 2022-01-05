import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import "./App.css";

class Start extends Component{
   constructor(props){
       super(props);
    //    this.state={
    //        data:1
    //    }
    this.state = {favoritecolor: "red"};
   }
//    updateSet(){
//        this.setState({data:this.state.data + 1})
//    }
   getDate(){
   this.setState({favoritecolor:this.props.favcol });
  }
    shouldComponentUpdate() {
    return true;
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //     this.setState({favoritecolor:this.props.favcol})
    //     }, 3000)
    // }
   render(){
       return(
           <div className="App">
               <nav>
            <button><NavLink to="/home">Home</NavLink></button>
            </nav>
                {/* <h1>{this.props.Lname}</h1>
                <h2>{this.state.data}</h2>
                <button onClick={()=>this.updateSet()}>Update</button> */}
                 <h1>My Favorite Color is {this.state.favoritecolor} </h1>
                 <button  onClick={()=>this.getDate()}>Set</button>
           </div>
       );
   }
}

export default Start;