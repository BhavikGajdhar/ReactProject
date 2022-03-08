import { CreateUserActions } from "../Constants/Constants"

export const CreateUserReducer=(
    state={
        userData:[],
        saveUserData:null,
        idByUserData:null
    },action
)=>{
    switch(action.type){

        /** store the data of UserList */
        case CreateUserActions.GET_USER_DATA:
            let userDataCopy = action.payload;
            return { ...state, userData: userDataCopy };

        /** Remove the data By ID  */    
        case CreateUserActions.DELETE_USER_DATA:
             const removeData = state.userData.filter((item) => item.id !== action.payload);
            return { ...state, userData: removeData };

        /** Save The User data of List  */    
        case CreateUserActions.SUBMIT_USER_DATA:
            let saveUserDataCopy = action.payload;
            return { ...state, saveUserData: saveUserDataCopy };

        /** Patch Value Of Form  */    
        case CreateUserActions.GET_ID_USER_DATA:
            return { ...state, idByUserData: action.payload };

        /** Update Data of User List */    
        case CreateUserActions.UPDATE_USER_DATA:
            let updateEmployeeData =state.userData.map((item) => item.id == action.payload.id ? action.payload : item);
            return { ...state, userData: updateEmployeeData };

        default:
           return state;
    }
};