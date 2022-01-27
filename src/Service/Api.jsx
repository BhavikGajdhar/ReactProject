import axios from "axios";
import { onGetById,onUpdate,onSubmit,onDelete,onList } from "../actions/index";

const url = "http://localhost:4500/user";

export const getUserData = () => {
  return function(dispatch){
   return axios.get(url).then((response)=>{
      const customers = response.data ;
      dispatch(onList(customers));
    });
  } 
};
export const postUserData =  (data) => {
  return function(dispatch){
   return axios.post(url,data ).then((response)=>{
      const customers =  response ? response.data : [];
      dispatch(onSubmit(customers));
    });
  } 
};
export const deleteUserData = (id) => {
  return function(dispatch){
    return axios.delete(url + "/" + id).then((response)=>{
      const customers = response ? response.data : [];
      dispatch(onDelete(customers));
    });
  } 
};

export const putUserData =  (id, data) => {
  debugger
  return function(dispatch){
   return axios.put(url + "/" + id, data).then((response)=>{
      const customers = response ? response.data : [];
      dispatch(onUpdate(customers));
    });
  } 
};

export const getUserDataById = (id) => {
    return function  (dispatch)  {
    const url1 = url + "/" + id
    return axios.get(url1).then(

      (response) => {
        const customers = response ? response.data : [];
        dispatch(onGetById(customers));
      },

    );
  }
}