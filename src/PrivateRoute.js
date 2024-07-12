import { Route, Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const PrivateRoute = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log(isAuthenticated)

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if(token && user){
          dispatch({type: 'LOGIN_SUCCESS', payload: {token, user}});
        }
      },[dispatch]);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute