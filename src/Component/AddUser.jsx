import React, { useState,useEffect } from "react";
import { postUserData, getUserDataById,putUserData} from "../Service/Api";
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
//import { onSubmit,onUpdate,onGetById} from "../actions/index"
import { connect } from 'react-redux';



 function AddUser (props) {
 //const myState = useSelector((state) => state.onAction.value);

    //const dispatch = useDispatch();

    const { id } = useParams();

   // const Data = props.data;

    const initialValue={
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        phone:"",
    };

    const disabled = "disabled";
    

    const [title, setTitle] = useState(initialValue);

    useEffect(() => {
        if(id){
           props.getSampleData(id);
        }
    },[]); 

    useEffect(()=>{
        if(id){
          setTitle(props.data);
        }
    },[props.data]);
        
    // if(Data){
    //         Data.map(s => ({ ...s, setTitle({s}) }));
    //     }
        


    //  const  postData=async() =>{
    //      debugger
    //     console.log(title);
    //     //await postUserData(title);
    // }
    
    // const getUsersById = () =>{
           
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
         <div>
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
                   (id) ?  <NavLink to="/list"><button type="button" onClick={() => props.putSampleData(title.id,title)}>Update</button></NavLink> :
                           <NavLink to="/list"><button type="button" onClick={() => props.addSampleData(title)}>Submit</button></NavLink>
                }     
            </div>
         </form>
         </div>
     )
 }

const mapStateToProps = (state) => ({
    data : state.onAction.value,
});

const mapDispatchToProps = (dispatch) => ({
    getSampleData: (id) => dispatch(getUserDataById(id)),
    putSampleData: (id,title) =>   dispatch(putUserData(id,title)),
    addSampleData: (title) => dispatch(postUserData(title))
});


 export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
 export { AddUser };