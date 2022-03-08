import { Component } from "react";
import { UserListPresentation } from "./User-List-Presentation/UserListPresentation";
import { getUserData, deleteUserDataByID, getUserDataById } from "../Middleware/UserMiddleware";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class UserListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }
  
  removeItem = (id) => {
    this.props.removeId(id);
  };

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
  actualUserData: state.CreateUserReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getUserData()),
  removeId: (id) => dispatch(deleteUserDataByID(id)),
  nullValue:()=>dispatch(getUserDataById())
});

const UserListFN = (props) => {
  return <UserListContainer params={useParams()} {...props} />;
};
const userListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListFN);
export { userListingContainer as UserListContainer };
