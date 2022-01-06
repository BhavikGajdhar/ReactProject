import React,{Component} from "react";
import Child from "./Child";

class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }
    }
    greetParent(value){
        alert(`This is ${value}`)
    }
    render(){
        return(
            <>
            <Child   greetHandler={this.greetParent}/> 
            </>
        )
    }
}
export default Parent;