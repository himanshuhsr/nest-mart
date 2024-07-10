import axios from 'axios';

export const login =(credentials) => async(dispatch)=>{
    dispatch({type: 'LOGIN_REQUEST'});
    try{
        const response = await axios.post('http://localhost:3030/api/v1/user/login', credentials);
        const {token} = response.data.data;
        console.log(response)
        console.log(token)
        localStorage.setItem('token', token);
        dispatch({type: 'LOGIN_SUCCESS', payload: token});
    }catch(err){
        console.log(err)
        dispatch({type: 'LOGIN_FAILURE', payload: err});
    }
}

export const logout = () =>(dispatch) =>{
    localStorage.removeItem('token');
    dispatch({type: 'LOGOUT'});
}