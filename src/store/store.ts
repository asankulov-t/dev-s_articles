import {applyMiddleware, combineReducers, createStore} from "redux";
import {ArticlesReducer} from "./reducers/ArticlesReducer";
import thunk from "redux-thunk";
import { ReadReducer } from "./reducers/ReadReducer";

const combineReducer=combineReducers({
    ArticlesReducer,
    ReadReducer
})

export const store=createStore(combineReducer,applyMiddleware(thunk))

export type AppRootType=ReturnType<typeof combineReducer>