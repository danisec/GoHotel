import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL, API_KEY} from '@env';

const initialState = {
  listbooking: [],
  name: '',
  email: '',
  phone: '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    booking(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },

    checkoutBooking(state, action) {
      state.listbooking.unshift(action.payload);
    },
  },
});

export const {booking, checkoutBooking} = bookingSlice.actions;

export default bookingSlice.reducer;
