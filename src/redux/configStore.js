import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerTong } from "./reducer/reducer";

const rootReducer = combineReducers({
    // khai báo reducer
    reducerTong
})

export const store = createStore(rootReducer, applyMiddleware(thunk)); 