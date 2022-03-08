import {CreateUserActions} from "../Constants/Constants";

/** Listing User Data Action  */
export const listUserData = (data) => {
    return {
      type: CreateUserActions.GET_USER_DATA,
      payload: data,
    };
};

/** Delete User Data Action  */
export const deleteUserData = (data) => {
    return {
      type: CreateUserActions.DELETE_USER_DATA,
      payload: data,
    };
};

/** Submit User Data Action  */
export const submitUserData = (data) => {
  return {
    type: CreateUserActions.SUBMIT_USER_DATA,
    payload: data,
  };
};

/** Patch Value Of Form Action  */
export const getIdUserData =(data)=>{
  return{
    type:CreateUserActions.GET_ID_USER_DATA,
    payload : data,
  }
}

/** Updated Value Of User List Action  */
export const updateUserData = (data) =>{
  return{
    type:CreateUserActions.UPDATE_USER_DATA,
    payload : data,
  }
}