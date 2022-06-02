import storage from "redux-persist/lib/storage";
import {combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import tabReducer from "./reducer/tabReducer";
const persistConfig = {
    key : "root",
    storage : storage
};

const rootReducer = combineReducers({
    tabReducer
});

const myPersistReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(myPersistReducer);

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
