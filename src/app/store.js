import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authReducer from '../features/auth/authSlice';
import cityReducer from '../features/hotel/citySlice';
import searchHotelReducer from '../features/hotel/searchHotelSlice';
import detailHotelReducer from '../features/detail-hotel/detailHotelSlice';
import bookingReducer from '../features/booking/bookingSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
    search: searchHotelReducer,
    detail: detailHotelReducer,
    booking: bookingReducer,
    favorites: favoritesReducer,
    profile: profileReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
