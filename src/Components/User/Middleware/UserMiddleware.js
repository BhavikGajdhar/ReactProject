import axios from "axios";
import {
  listUserData,
  deleteUserData,
  submitUserData,
  getIdUserData,
  updateUserData,
} from "../Actions/CreateUserAction";

/** Use Json-server local URL*/
const url = "http://localhost:4500/user";

/** Get All Data of Use */
export const getUserData = () => {
  return function (dispatch) {
    axios
      .get(url)
      .then((response) => {
        const customers = response ? response.data : [];
        dispatch(listUserData(customers));
      })
      .catch((error) => {

      });
  };
};

/** Delete Data By UserID  */
export const deleteUserDataByID = (id) => {
  return function (dispatch) {
    axios.delete(url + "/" + id).then((response) => {
      dispatch(deleteUserData(id));
    }).catch((error)=>{
        
    });
  };
};

/** Save data of User  */
export const postUserData = (data,navigate) => {
  return function (dispatch) {
    axios.post(url, data).then((response) => {
      const customers = response ? response.data : [];
      dispatch(submitUserData(customers));
      navigate("/UserList");
    }).catch((error)=>{
        
    });
  };
};

/** Get Data By ID  */
export const getUserDataById = (id) => {
  return function (dispatch) {
    axios.get(url + "/" + id).then((response) => {
      const customers = response ? response.data : [];
      dispatch(getIdUserData(customers));
    }).catch((error)=>{

    });
  };
};

/** Update data of User */
export const putUserData = (id, data, navigate) => {
  return function (dispatch) {
    axios.put(url + "/" + id, data).then((response) => {
      const customers = response ? response.data : [];
      dispatch(updateUserData(customers));
      navigate("UserList");
    }).catch((error)=>{
        
    });
  };
};
