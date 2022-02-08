import axios from "axios";
import { onGetById,onUpdate,onSubmit,onDelete,onList } from "../actions/index";

const url = "http://localhost:4500/user";

export const getUserData = () => {
  return function(dispatch){
    axios.get(url).then((response)=>{
      const customers =  response ? response.data : [];
      dispatch(onList(customers));
    }).catch((error)=>console.log(error));
  } 
};

export const deleteUserData = (id) => {
  return function(dispatch){
     axios.delete(url + "/" + id).then((response)=>{
      const customers = response ? response.data : [];
      dispatch(onDelete(id));
    });
  } 
};

export const postUserData =  (data) => {
  return function(dispatch){
    axios.post(url,data ).then((response)=>{
      const customers =  response ? response.data : [];
      dispatch(onSubmit(customers));
    });
  } 
};

export const getUserDataById = (id) => {
  return function  (dispatch)  { 
     axios.get(url + "/" + id).then((response) => {
        const customers = response ? response.data : [];
        dispatch(onGetById(customers));
    });
  }
};

export const putUserData =  (id, data,navigate) => {
  debugger
  return function(dispatch){
    axios.put(url + "/" + id, data)
    .then((response)=>{
      const customers = response ? response.data : [];
      dispatch(onUpdate(customers));
      navigate("/list");
    });

    //getUserData();
    
  } 
};
