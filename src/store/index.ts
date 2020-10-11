import { createStore, combineReducers, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { packageListReducer} from "./packageList/reducer";
import { PackageListActionTypes } from "./packageList/types";

const rootReducer = combineReducers({
    packages: packageListReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type AppState = ReturnType<typeof rootReducer>;

export type AppActions = 
    | PackageListActionTypes;
    