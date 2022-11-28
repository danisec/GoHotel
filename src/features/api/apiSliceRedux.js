import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hotels: [],
  error: '',
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
  return datas?.getHotelAutoSuggestV2?.results?.result?.hotels;
});

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHotels.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      (state.loading = false),
        (state.hotels = action.payload),
        (state.error = '');
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      (state.loading = false),
        (state.hotels = []),
        (state.error = action.error.message);
    });
  },
});

export default hotelSlice.reducer;
