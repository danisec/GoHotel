import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import {apiSlice} from '../features/api/apiSlice';
// import {setupListeners} from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/authSlice';
import apiSliceReducer from '../features/api/apiSliceRedux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    api: apiSliceReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// setupListeners(store.dispatch);
