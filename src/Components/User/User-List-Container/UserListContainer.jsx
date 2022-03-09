import { Component } from "react";
import { UserListPresentation } from "./User-List-Presentation/UserListPresentation";
import { getUserData, deleteUserDataByID } from "../Middleware/UserMiddleware";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {getIdUserData} from "../Actions/CreateUserAction";
class UserListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }
  /** Remove The Employee Data Middleware Call */
  removeItem = (id) => {
    this.props.removeId(id);
  };

  /** Go navigation  Form Current Page */
  Navigate = () => {
    this.props.navigate("/Add");
    this.props.nullValue();
  };

  render() {
    return (
      <div>
        <UserListPresentation
          initialValues={this.props.actualUserData}
          removeItem={this.removeItem}
          navigate={this.Navigate}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  actualUserData: state.createUserReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getUserData()),
  removeId: (id) => dispatch(deleteUserDataByID(id)),
  nullValue:()=>dispatch(getIdUserData(null))
});

const UserListFN = (props) => {
  return <UserListContainer params={useParams()} {...props} />;
};
const userListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListFN);
export { userListingContainer as UserListContainer };
