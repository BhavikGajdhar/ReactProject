import axios from "axios";
import { onGetById } from "../actions/index";

const url = "http://localhost:3000/user";

export const getUserData = async () => {
  return await axios.get(url);
};
export const postUserData = async (props) => {
  return await axios.post(url, props);
};
export const deleteUserData = async (id) => {
  return await axios.delete(url + "/" + id);
};
// export const getUserDataById = (id) => {
//   debugger;
//   // return (dispatch) => {
//   //  await axios
//   //     .get(url + "/" + id)
//   //     .then((response) => {
//   //       dispatch(onGetById(response.data));
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error");
//   //     });
//   // };
//   return await axios.get(url + "/" + id);
// };


export const putUserData = async (id, data) => {
  return await axios.put(url + "/" + id, data);
};

export const getUserDataById = (id) => {

  return (dispatch) => {

    debugger
    console.log(url+"/"+id,"url");

    axios.get(url+"/"+id).then(

      (response) => {
       console.log(response);
        const customers = response && response.data;

        dispatch(onGetById(customers));

      },

    );
  }}
