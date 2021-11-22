import {createStore, combineReducers} from "redux";
import {basketReducer} from "./basketReducer";
import {countReducer} from "./countReducer";


const rootReducer = combineReducers({
    count: countReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer)