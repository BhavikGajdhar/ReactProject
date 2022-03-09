import React, { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {ValidationSchema} from "../../Constants/Constants"

class UserFormPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        id: "",
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
      },
      isAddMode: true,
      editId: null
    };
  }

  /** Go Back Navigation of Current Page */
  navigateBack = () => {
    this.props.navigate();
  };

  /**  Update and Submit form call for  Middleware*/
  handleSubmit = (values) => {
    if (values.id) {
      this.props.update(values.id, values);
    } else {
      this.props.save(values);
    }
  };

  render() {
    return (
      <div className="bg-gray-50 flex-grow overflow-y-auto">
        <Formik
          initialValues={
            this.props.initialValues ? this.props.initialValues : this.state.initialValues
          }
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
        >
          {(formik) => {
            const { values, handleChange } = formik;
            return (
              <Form>
                <div className="px-6 md:px-12 py-4">
                  <h1 className="text-2xl font-bold">
                    {this.props.initialValues ?  "Edit User":"Create User" }
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
                          name="firstName"
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
                          name="lastName"
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
                            value={
                              this.props.initialValues
                                ? values.username
                                : (values.username = values.firstName)
                            }
                            // onChange={handleChange}
                            disabled={ values.username}
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
                            value={this.props.initialValues
                              ? values.email
                              : (values.email)}
                            disable={values.email}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          ></Field>
                        </div>
                        <ErrorMessage
                          name="email"
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
                          name="phone"
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
                    >
                      {this.props.initialValues ? "Update":"Save"  }
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
export {UserFormPresentation as UserFormPresentation}