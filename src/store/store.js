import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
//import {createStore} from 'redux';
//import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const composeEnhaner = (process.env.NODE_ENV !== 'production' && window && window.__REDuX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action)
//     }
//     console.log('type', action.type);
//     console.log('payload', action.payload);
//     console.log('currentState', store.getState());
//     next(action);
// } ;



const composeEnhancers = composeEnhaner(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
//export const store = createStore(rootReducer);
//export const store1 = configureStore();

export const persistor = persistStore(store);