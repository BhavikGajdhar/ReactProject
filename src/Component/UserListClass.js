import React, { Component } from "react";
import { deleteUserData } from "../Service/Api";
import UserList from "./UserList";

class UserListClass extends Component{

    constructor(props){
        super(props);
        // this.state = {this.props.title : this.props.setUsers};
    }
    userDeleteById =async(id)=>{
        await deleteUserData(id);
    }
    render(){
        return(
            <div>
              <UserList getValueById={this.userDeleteById} />
            </div>
        );
    }

} 
export default UserListClass;