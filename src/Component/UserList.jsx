import { deleteUserData,getUserData } from "../Service/Api";
import { useEffect,useState } from "react";
import { NavLink } from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import { onDelete} from "../actions/index";
import { connect } from 'react-redux';

function UserList (props) {

  //  const myState = useSelector((state) => state.onAction);
    //const dispatch = useDispatch();

    const[users,setUsers] = useState([]);


    useEffect(() => {
        props.getData();
    },[]);
    useEffect(() => {
        //console.log(props.data)
        if(props.data){
           setUsers(props.data);
        }
    },[props.data]);

    // const getAllUsers = async() =>{
    //     const res = await getUserData();            
    //         setUsers(res.data);
    // } 
    // const deleteUser = async(e) => {
    //     await deleteUserData(e);
    //     const res = await getUserData();
    //     setUsers(res.data); 
    // }
    return(
        <>
          <NavLink to="/add"><button type="button">Add</button></NavLink>
            
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
                    {users.map((user,i)=>{
                    return(
                        <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><NavLink to={{pathname:`/edit/${user.id}`}}><button>Edit</button></NavLink></td>
                        <td><button type="button" onClick={()=> props.removeItem(user.id)}>Delete</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    data : state.onAction.value,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getUserData()),
    removeItem: (itemId) => dispatch(deleteUserData(itemId))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
export { UserList };