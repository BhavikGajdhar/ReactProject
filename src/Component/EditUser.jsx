import React, { Component } from "react";
import { getUserDataById, putUserData } from "../Service/Api";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { withRouter } from "react-router-dom";
//import { useSelector,useDispatch} from "react-redux";
//import { onSubmit,onUpdate,onGetById} from "../actions/index"
import { connect } from "react-redux";
// import { Router, Route, browserHistory, IndexRoute} from 'react-router'

class EditUser extends Component {
  //const myState = useSelector((state) => state.onAction.value);

  //const dispatch = useDispatch();
  constructor(props) {
    super(props);
    //console.log(this.props.match.params.id);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
    };
    //this.handleChange = this.handleChange.bind(this);
    // id  = useParams()
  }
  // classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
  componentDidMount() {
    debugger;
    let { id } = this.props.params;
    this.setState({ editId: id });
    this.props.getSampleData(id);
  }

  handleChange = (e) => {
    debugger;
    //  let { name, value } = e.target;

    //   this.setState({
    //         [name]: value,
    //     });
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  navigateBack = () => {
    debugger;
    console.log(this.props);
    this.props.navigate("/list");
  };

  handleFormSubmit = (values) => {
    console.log(values);
    this.props.putSampleData(values.id, values, this.props.navigate);
  };
  render() {
    const disabled = "disabled";
    const initialValues = this.props.data ? this.props.data : this.state;
    console.log(initialValues);
    // initialValues={initialValues}
    // this.setState(this.props.data);
    return (
      <div className="bg-gray-50 flex-grow overflow-y-auto">
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={ValidationSchema}
          onSubmit={(values) => {
            this.handleFormSubmit(values);
          }}
        >
          {(formik) => {
            const { values, handleChange } = formik;

            return (
              <Form>
                <div className="px-6 md:px-12 py-4">
                  <h1 className="text-2xl font-bold">
                    {this.state.isAddMode ? "Create Idol" : "Edit User"}
                  </h1>
                  <div className="flex flex-col md:flex-row justify-between gap-8 pt-4 w-full">
                    <section className="w-full flex flex-col gap-6">
                      {/* First Name */}
                      <div className="sm:col-span-3 form-row">
                        <label
                          htmlFor="name"
                          className="block text-base font-medium text-gray-700"
                        >
                          FirstName
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={values.firstName}
                            autoComplete="given-name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <ErrorMessage
                          name="name"
                          component="small"
                          className="error font-semibold text-red-500"
                        />
                      </div>
                      {/* Last Name */}
                      <div className="sm:col-span-3 form-row">
                        <label
                          htmlFor="name"
                          className="block text-base font-medium text-gray-700"
                        >
                          LastName
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={values.lastName}
                            autoComplete="given-name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <ErrorMessage
                          name="name"
                          component="small"
                          className="error font-semibold text-red-500"
                        />
                      </div>
                      {/* idol Username */}
                      <div className="form-row">
                        <label
                          htmlFor="description"
                          className="block text-base font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="username"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            disabled={values.username}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <ErrorMessage
                          name="description"
                          component="small"
                          className="error font-semibold text-red-500"
                        />
                      </div>
                      {/* bank account detail */}
                      <div className="sm:col-span-3 form-row">
                        <label
                          htmlFor="userAccountId"
                          className="block text-base font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1 w-full">
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            autoComplete="country-name"
                            value={values.email}
                            onChange={handleChange}
                            disabled={values.email}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          >
                            {/* <option value={""}>Select Account</option>
                            {
                            this.props.accounts && this.props.accounts.map((account)=> 
                              <option key={account.userAccountId} value={account.userAccountId}>{account.email}</option>)
                            } */}
                          </Field>
                        </div>
                        <ErrorMessage
                          name="userAccountId"
                          component="small"
                          className="error font-semibold text-red-500"
                        />
                      </div>
                      <div className="form-row">
                        <label
                          htmlFor="description"
                          className="block text-base font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="phone"
                            id="phone"
                            value={values.phone}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <ErrorMessage
                          name="description"
                          component="small"
                          className="error font-semibold text-red-500"
                        />
                      </div>
                    </section>
                  </div>
                  <div className="buttons flex justify-center items-center gap-8 py-6">
                    <button
                      className="bg-white border border-black px-3 py-1"
                      type="button"
                      onClick={() => this.navigateBack()}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-gray-200 border border-black px-3 py-1"
                      type="submit"
                      //   onClick={()=> this.navigateBack()}
                    >
                      {/* {this.state.isAddMode?"Save":"Update"} */}Update
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
        {/* <form>
               <h5>First Name</h5>
               <input type="text" name="firstName" id="fistName" value={false || this.props.data.firstName} onChange={this.handleChange}/>
               <h5>Last Name</h5>
               <input type="text" name="lastName" id="lastName" value={this.state.lastName || this.props.data.lastName} onChange={this.handleChange}/>
               <h5>UserName</h5>
               <input type="text" name="username"  id="autofill" 
                       value={this.state.username || this.props.data.username} 
                       disabled = {this.disabled}/>
               <h5>Email</h5>
                   {
                     <input type="text" name="email" id="email" value={this.state.email || this.props.data.email}
                               disabled = {this.disabled}/>
                   } 
               
               <h5>Phone</h5>
               <input type="text" name="phone" id="phone" value={this.state.phone || this.props.data.phone} onChange={this.handleChange}/>
               <div>
                     <NavLink to="/list"><button type="submit" onClick={() => this.handleFormSubmit(this.state)}>Update</button></NavLink>     
               </div>
            </form> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.onAction.patch,
});

const mapDispatchToProps = (dispatch) => ({
  getSampleData: (id) => dispatch(getUserDataById(id)),
  putSampleData: (id, title, navigate) =>
    dispatch(putUserData(id, title, navigate)),
});

const EditUserFN = (props) => {
  return <EditUser params={useParams()} {...props} />;
};

const editUser = connect(mapStateToProps, mapDispatchToProps)(EditUserFN);
export { editUser as EditUser };
