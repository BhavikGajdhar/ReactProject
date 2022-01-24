import React, { useState,useEffect } from "react";
import { postUserData, getUserDataById,putUserData} from "../Service/Api";
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { onSubmit,onUpdate,onGetById} from "../actions/index"
import store from "../content";
import onAction from "../reducers/reducer";
import { connect } from 'react-redux';




 function AddUser (props) {

     const myState = useSelector((state) => state.onAction);
    
    const dispatch = useDispatch();

    const { id } = useParams();

    let initialValue={
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        phone:"",
    };

    const disabled = "disabled";
    

    let [title, setTitle] = useState(initialValue);

    useEffect(() => {
        if(id){
            debugger
             props.getSampleData(id);
            //console.log(props.initialization);
                //setTitle(res.data);
        }
    },[])
    // componentDidMount = () => {
    //     props.getSampleData(id);
    // }

    //  const  postData=async() =>{
    //      debugger
    //     console.log(title);
    //     //await postUserData(title);
    // }
    
    // const getUsersById = async() =>{
    //         // const res = await getUserDataById(id);
    //         //console.log(res.data);
    //         setTitle(myState); 
    // } 

    // const putData = async() => {
    //     //console.log(title.id,title);
    //     await putUserData(title.id,title);
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
       
        if(id){
            setTitle({
                ...title,
                [name]: value,
            });
        }else{
            var x;
            if([name] == 'firstName'){ 
                x=value;
                document.getElementById('autofill').value = x;
            }
            setTitle({
                ...title,
                [name]: value, 
                username:(x ? `${x}` : title.username),  
            });
        }
        
    }
    
     return(
         <>
         <form>
            <h5>First Name</h5>
            <input type="text" name="firstName" value={title.firstName} onChange={handleChange}/>
            <h5>Last Name</h5>
            <input type="text" name="lastName" value={title.lastName} onChange={handleChange}/>
            <h5>UserName</h5>
            <input type="text" name="username"  id="autofill" 
                    value={title.username} 
                    disabled = {disabled}/>
            <h5>Email</h5>
                {
                   (id) ?  <input type="text" name="email" value={title.email}
                            disabled = {disabled}/> :
                           <input type="text" name="email" value={title.email} onChange={handleChange}/>
                } 
            
            <h5>Phone</h5>
            <input type="text" name="phone" value={title.phone} onChange={handleChange}/>
            <div>
                {
                   (id) ?  <NavLink to="/list"><button type="button" onClick={() => dispatch(onUpdate(title))}>Update</button></NavLink> :
                           <NavLink to="/list"><button type="button" onClick={() => dispatch(onSubmit(title))}>Submit</button></NavLink>
                }     
            </div>
            <span>{props.initialization}</span>
         </form>
         </>
     )
 }
const mapStateToProps = (state) => ({
    initialization: state.onAction.initialization,
});
const mapDispatchToProps = (dispatch) => ({
    getSampleData: (id) => dispatch(getUserDataById(id))
    //removeItem: (itemId) => dispatch(deleteItemAction(itemId))
});
 const SamplePageComp = connect(mapStateToProps,mapDispatchToProps)(AddUser);
 export default SamplePageComp;