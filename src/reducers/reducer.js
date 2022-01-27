//import {postUserData ,putUserData,deleteUserData,getUserDataById} from '../Service/Api';
const initialState = {
     value:[]
 }


const onAction = (state = initialState,action) =>{
   debugger
    switch(action.type){
       case "LIST"  :
          return {...state , value:action.payload}
       case "SUBMIT": 
          return {...state , value:action.payload}
       case "UPDATE":
         // const copyData = action.payload;
          return {...state , value:action.payload}
       case "DELETE":
          return {...state , value:action.payload}
       case "PATCH_VALUE":
            return {...state , value:action.payload}
       default : 
            return state;
    }

}
export  default  onAction; 