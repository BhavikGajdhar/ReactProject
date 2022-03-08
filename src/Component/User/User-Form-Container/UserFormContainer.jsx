import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserFormPresentation } from "./User-Form-Presentation/UserFormPresentation";
import {
  postUserData,
  getUserDataById,
  putUserData,
} from "../Middleware/UserMiddleware";

class UserFormContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { id } = this.props.params;
    if (id) {
      this.props.getSampleData(id);
    }
  }

  /** Add The Employee Data Middleware Call */
  saveValue = (value) => {
    this.props.addSampleData(value, this.props.navigate);
  };

  /** Updated The Employee Data Middleware  */
  updateValue = (id, value) => {
    this.props.putSampleData(id, value, this.props.navigate);
  };

  /** Go navigation back Form Current Page  */
  Navigate = () => {
    this.props.navigate("/UserList");
  };

  render() {
    return (
        <div>
            <UserFormPresentation
                initialValues={this.props.userDataById}
                save={this.saveValue}
                update={this.updateValue}
                navigate={this.Navigate}
            />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDataById: state.CreateUserReducer.idByUserData,
});

const mapDispatchToProps = (dispatch) => ({
  getSampleData: (id) => dispatch(getUserDataById(id)),

  putSampleData: (id, value, navigate) =>
    dispatch(putUserData(id, value, navigate)),

  addSampleData: (value, navigate) => dispatch(postUserData(value, navigate)),
});

const UserFormFN = (props) => {
  return <UserFormContainer params={useParams()} {...props} />;
};

const userFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormFN);
export { userFormContainer as UserFormContainer };
