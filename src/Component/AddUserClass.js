import React, { Component } from "react";
import AddUser from "./AddUser";
import { postUserData,putUserData} from "../Service/Api";

class AddUserClass extends Component{

    constructor(props){
        super(props);
    }
    userAddData = async(addValue) =>{
        await postUserData(addValue);
    }

    userUpdateDate= async(updateValue) =>{
        await putUserData(updateValue.id,updateValue);
    }
    
    render(){
        return(
            <div>
              <AddUser getAddValue={this.userAddData} getUpdateData={this.userUpdateDate}/>
            </div>
        );
    }

} 
export default AddUserClass;