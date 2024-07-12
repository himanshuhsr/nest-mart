import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key:'root',
//     storage
// }

const rootReducer = combineReducers({
    auth: authReducer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

export default store;