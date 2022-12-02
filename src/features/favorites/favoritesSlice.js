import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  status: 'idle',
  error: null,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.unshift(action.payload);
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.hotelId !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
