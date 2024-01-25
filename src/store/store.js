import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
//import {createStore} from 'redux';
//import { configureStore } from "@reduxjs/toolkit";

const middlewares = [logger];

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action)
//     }
//     console.log('type', action.type);
//     console.log('payload', action.payload);
//     console.log('currentState', store.getState());
//     next(action);
// } ;



const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
//export const store = createStore(rootReducer);
//export const store1 = configureStore();