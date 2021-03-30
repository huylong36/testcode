import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import useReducers from '../Reducer/Reducer'

const rootReducers = combineReducers({
    useReducers: useReducers,
});
const store = createStore(rootReducers, composeWithDevTools());

export default store;