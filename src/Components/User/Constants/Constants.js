import * as Yup from "yup";
export const createUserActions = {
    GET_USER_DATA: "GET_USER_DATA",
    DELETE_USER_DATA:"DELETE_USER_DATA",
    SUBMIT_USER_DATA:"SUBMIT_USER_DATA",
    GET_ID_USER_DATA:"GET_ID_USER_DATA",
    UPDATE_USER_DATA:"UPDATE_USER_DATA"
};
const phoneRegExp = /([0-9]{10})/;
// const userNameRegExp = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;
export const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("FirstName is required") .nullable(),
    lastName: Yup.string().trim().required("LastName is required"),
    email: Yup.string().trim().required("Email is required."),
    phone: Yup.string()
     .required("Phone Number is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "The Phone number should be maximum of 10 digits"),
  });