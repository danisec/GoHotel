import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL, API_KEY} from '@env';

const initialState = {
  hotel: [],
  status: 'idle',
  error: null,
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
  },
};

export const detailHotels = createAsyncThunk(
  'detail-hotel/detailHotels',
  async id => {
    try {
      const res = await fetch(
        `${API_URL}/v1/hotels/details?hotel_id=${id}`,
        options,
      );

      const data = await res.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const detailHotelSlice = createSlice({
  name: 'detail-hotel',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(detailHotels.pending, state => {
        state.status = 'loading';
      })
      .addCase(detailHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotel = action.payload;
      })
      .addCase(detailHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailHotelSlice.reducer;
