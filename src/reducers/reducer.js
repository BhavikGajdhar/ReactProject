import {postUserData ,putUserData,deleteUserData,getUserDataById} from '../Service/Api';
let initialization = {
     value:[]
};


const onAction = async (state = initialization,action)=>{
     debugger
    switch(action.type){
       case "SUBMIT": 
            state = action.payload;
            console.log(state);
            await postUserData(state);
            break;
       case "UPDATE":
            state = action.payload;
            console.log(state);
            await putUserData(state.id,state);
            break;
       case "DELETE":
            state = action.payload;
            console.log(state);
            await deleteUserData(state);
            break;
       case "PATCH_VALUE":
          //let copyData = action.payload.id;
            // const {id,data}=action.payload;
            //let res  = await getUserDataById(action.payload.id);
          //   state = res.data;
         //  console.log(res.data);
            return {...state,
               value:{data : action.payload}
            }
       default : 
            return state;
    }

}
export  default onAction; 