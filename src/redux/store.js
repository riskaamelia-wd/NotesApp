import { combineReducers, createStore } from "@reduxjs/toolkit";
import { notesSlice } from "./slicers/productSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
    note: notesSlice
})

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}