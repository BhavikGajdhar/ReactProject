import { NavLink } from 'react-router-dom';
import React, { Component} from "react";


class UserListPresentation extends Component{
    constructor(props){
      super(props);
    }
    render(){

        return(
            <div>
              <button type="button" onClick={() => this.props.navigate()}>Add</button> 
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.initialValues && this.props.initialValues.map((user,i)=>{
                        return(
                            <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><NavLink to={`/Edit/${user.id}`}><button>Edit</button></NavLink></td>
                            <td><button type="button" onClick={()=>this.props.removeItem(user.id)}>Delete</button></td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export {UserListPresentation as UserListPresentation};