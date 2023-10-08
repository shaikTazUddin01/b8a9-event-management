import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {


   const location=useLocation();
   const curentLocation=(location.pathname)

    const { user, loader } = useContext(AuthContext)
    const navigate = useNavigate()

    if (loader) {
        return (<div className='min-h-[90vh] flex justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>)
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'} state={curentLocation}></Navigate>
    }



};

export default PrivateRouter;