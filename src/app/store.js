import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authReducer from '../features/auth/authSlice';
import cityReducer from '../features/hotel/citySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
