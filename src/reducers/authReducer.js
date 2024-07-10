const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {...state, loading: true};
        case 'LOGIN_SUCCESS':
            return {...state, loading: false, token: action.payload, isAuthenticated: true};
        case 'LOGIN_FAILURE':
            return {...state, loading: false, error: action.payload};
        case 'LOGOUT':
            return {...state, token: null, isAuthenticated: false};
        default:
            return state;
    }
}

export default authReducer;