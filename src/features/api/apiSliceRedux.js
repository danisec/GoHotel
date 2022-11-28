import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  status: 'idle',
  error: null,
};

export const fetchHotels = createAsyncThunk(`hotel/fetchHotels`, async () => {
  const data = await fetch(
    'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest?string=new%20york&get_pois=true&combine_regions=true&get_hotels=true&get_airports=true&show_all_cities=true&get_regions=true&get_cities=true',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2d7743f4d2mshf45cc90e6b351d9p1b0197jsn637cd277910a',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    },
  );
  const datas = await data.json();
  return datas?.getHotelAutoSuggestV2?.results?.result?.hotels.hotel_0;
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
