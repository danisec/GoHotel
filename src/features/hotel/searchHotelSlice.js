import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL, API_KEY} from '@env';

const initialState = {
  search: [],
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

export const searchHotels = createAsyncThunk(
  'hotels/searchHotels',
  async getCity => {
    try {
      const res = await fetch(
        `${API_URL}/v1/hotels/search?sort_order=HDR&location_id=${getCity}&date_checkout=2022-12-3&date_checkin=2022-12-2&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1&amenities_ids=FINTRNT%2CFBRKFST`,
        options,
      );

      const data = await res.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchHotels.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.search = action.payload;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
