import { createUserActions } from "../Constants/Constants"

export const createUserReducer=(
    state={
        userData:[],
        saveUserData:null,
        idByUserData:null
    },action
)=>{
    switch(action.type){

        /** store the data of UserList */
        case createUserActions.GET_USER_DATA:
            let userDataCopy = action.payload;
            return { ...state, userData: userDataCopy };

        /** Remove the data By ID  */    
        case createUserActions.DELETE_USER_DATA:
             const removeData = state.userData.filter((item) => item.id !== action.payload);
            return { ...state, userData: removeData };

        /** Save The User data of List  */    
        case createUserActions.SUBMIT_USER_DATA:
            let saveUserDataCopy = action.payload;
            return { ...state, saveUserData: saveUserDataCopy };

        /** Patch Value Of Form  */    
        case createUserActions.GET_ID_USER_DATA:
            return { ...state, idByUserData: action.payload };

        /** Update Data of User List */    
        case createUserActions.UPDATE_USER_DATA:
            let updateEmployeeData =state.userData.map((item) => item.id === action.payload.id ? action.payload : item);
            return { ...state, userData: updateEmployeeData };

        default:
           return state;
    }
};