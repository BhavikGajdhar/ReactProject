import axios from "axios";
import {
  listUserData,
  deleteUserData,
  submitUserData,
  getIdUserData,
  updateUserData,
} from "../Actions/CreateUserAction";

const url = "http://localhost:4500/user";

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

export const deleteUserDataByID = (id) => {
  return function (dispatch) {
    axios.delete(url + "/" + id).then((response) => {
      const customers = response ? response.data : [];
      dispatch(deleteUserData(id));
    }).catch((error)=>{
        
    });
  };
};

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

export const getUserDataById = (id) => {
  return function (dispatch) {
    axios.get(url + "/" + id).then((response) => {
      const customers = response ? response.data : [];
      dispatch(getIdUserData(customers));
    }).catch((error)=>{
      dispatch(getIdUserData(null));
    });
  };
};

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
