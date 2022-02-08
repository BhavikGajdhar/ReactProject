//import {postUserData ,putUserData,deleteUserData,getUserDataById} from '../Service/Api';
const initialState = {
     value:[],
     patch:null,
     loading:true,
 }


const onAction = (state = initialState,action) =>{
       debugger
    switch(action.type){
       case "LIST"  :
             return {...state,value:action.payload, loading:false}

       case "DELETE":
              const removeData =state.value.filter((item) => item.id !== action.payload);
              return {...state, value : removeData , loading:false}

       case "SUBMIT": 
              state.value.push(action.payload)
              return {...state ,loading:false}

       case "PATCH_VALUE":
              // let Data =state.value.filter((item) => item.id == action.payload.id);
              // console.log(Data);
              // let value1 = (Data.length>0)?Data[0]:{}
               //const editionDataCopy = state.value.map((item) => item.id == action.payload.id ? action.payload : item);
              return {...state,patch:action.payload,loading:false}

       case "UPDATE":
              let UpData =state.value.map((item) => item.id == action.payload.id ? action.payload : item);
              //console.log(UpData);
            //  state.value.push(action.payload)
              return{...state,value:UpData,loading:true}

       default : 
            return state;
    }

}
export  default  onAction; 