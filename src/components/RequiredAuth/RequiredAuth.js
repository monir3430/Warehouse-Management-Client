import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';


const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        if(loading){
            return <p>Loading....</p>
        }
    }
    if(!user){
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    else{
        return children;
    }
};

export default RequiredAuth;