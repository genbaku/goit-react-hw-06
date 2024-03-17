import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistCfg = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(contactsPersistCfg, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Я НЕ РОЗУМІЮ ЧАМУ ЦЕ НЕ ПРАЦЮЄ
// ПРАЦЮЄ ТІЛЬКИ З combineReducers
// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';
// import filtersReducer from './filtersSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["contacts"],
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filters: filtersReducer,
//   },
// });

// export const persistor = persistStore(store);
