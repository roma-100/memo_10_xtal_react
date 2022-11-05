import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import gen_modelsReducer from "./reducer-gen_models";
import specFormReducer from "./reducer-spec-form";

const reducers = combineReducers({
  gen_modelsReducer,
  specFormReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
