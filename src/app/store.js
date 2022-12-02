import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authReducer from '../features/auth/authSlice';
import cityReducer from '../features/hotel/citySlice';
import searchHotelReducer from '../features/hotel/searchHotelSlice';
import detailHotelReducer from '../features/detail-hotel/detailHotelSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
    search: searchHotelReducer,
    detail: detailHotelReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
