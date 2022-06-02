import {combineReducers, createStore} from "redux";
import tabReducer from "./reducer/tabReducer";

const rootReducer = combineReducers({
    tabReducer
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
