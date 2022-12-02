import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL, API_KEY} from '@env';

const initialState = {
  cityid: [],
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

export const fetchCity = createAsyncThunk('hotels/fetchCity', async city => {
  try {
    const res = await fetch(
      `${API_URL}/v1/hotels/locations?name=${city}&search_type=ALL`,
      options,
    );

    const data = await res.json();
    return parseInt(data[0]?.cityID, 10);
  } catch (e) {
    throw new Error(e);
  }
});

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCity.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cityid = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
