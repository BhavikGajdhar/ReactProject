import React, { lazy } from 'react';
import {
    Route,
    Routes,
    useLocation,
    useNavigate
} from "react-router-dom";

const HeaderComponent = lazy(() => import('./Component/Header/Header').
    then(({ Header }) => ({ default: Header })));

const UserListComponent = lazy(() => import('./Component/User/User-List-Container/UserListContainer').
    then(({ UserListContainer }) => ({ default: UserListContainer })));

const UserFormComponent = lazy(() => import('./Component/User/User-Form-Container/UserFormContainer').
    then(({ UserFormContainer }) => ({ default: UserFormContainer })));

const AppRouting=(props)=>{

    let navigate = useNavigate();
    const location = useLocation();
    return(<>
            <Routes>
                <Route exact path="/" element={<HeaderComponent navigate={navigate} location={location} />} /> 
                <Route exact path="/UserList" element={<UserListComponent navigate={navigate} location={location} />} /> 
                <Route exact path="/Add" element={<UserFormComponent navigate={navigate} location={location} />} /> 
                <Route exact path="/Edit/:id" element={<UserFormComponent navigate={navigate} location={location} />} /> 
            </Routes>
    </>)

}
export default AppRouting;