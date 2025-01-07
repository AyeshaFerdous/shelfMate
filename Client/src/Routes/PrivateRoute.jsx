
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import Loading from "../Components/Loading";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;