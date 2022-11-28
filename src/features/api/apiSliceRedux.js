import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const API =
  'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest?string=New%20York&get_pois=true&combine_regions=true&get_hotels=true&get_airports=true&show_all_cities=true&get_regions=true&get_cities=true';

const initialState = {
  hotels: [],
  status: 'idle',
  error: null,
};

export const fetchHotels = createAsyncThunk(`hotel/fetchHotels`, async () => {
  try {
    const res = await fetch(API, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd1cf891ec2mshbd2acf62e8981ffp11c823jsn5040f694a943',
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
      },
    });

    const data = await res.json();
    return data.getHotelAutoSuggestV2.results.result.hotels.hotel_0;
  } catch (e) {
    throw new Error(e);
  }
});

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchHotels.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotels = state.hotels.concat(action.payload);
      });
  },
});

export default hotelSlice.reducer;
