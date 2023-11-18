import { combineReducers } from 'redux'
import { configureStore, createStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import NotesSlice from './slicers/NotesSlice';

const reducers = combineReducers({
    note: NotesSlice
})

const persistconfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistconfig, reducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }