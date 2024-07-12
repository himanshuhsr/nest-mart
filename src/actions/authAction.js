import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const login =(credentials) => async(dispatch)=>{
    dispatch({type: 'LOGIN_REQUEST'});
    try{
        const response = await axios.post('http://localhost:3030/api/v1/user/login', credentials);
        const {token, user} = response.data.data;
        // console.log(response)
        // console.log(token)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({type: 'LOGIN_SUCCESS', payload: {token, user}});
        console.log('Sending to about us page...')
        window.location.href ='/about-us';
    }catch(err){
        console.log(err)
        dispatch({type: 'LOGIN_FAILURE', payload: err});
    }
}

export const logout = () =>(dispatch) =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({type: 'LOGOUT'});
}