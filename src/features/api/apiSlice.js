import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidHeader = {
  'x-rapidapi-key': 'fe40b14590msh93c14c0bcc7f504p1863c1jsn748f7049f4e5',
  'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
};

const createRequest = url => ({url, headers: rapidHeader});
export const apiSlice = createApi({
  reducerPath: 'apiSlice',

  baseQuery: fetchBaseQuery({
    baseUrl: `https://priceline-com-provider.p.rapidapi.com/v2/`,
  }),
  tagTypes: ['Hotel'],
  endpoints: builder => ({
    getHotelsByDate: builder.query({
      query: (id, checkIn, checkOut) =>
        createRequest(
          `hotels/search?sort_order=HDR&location_id=3000035821&date_checkout=2022-11-28&date_checkin=2022-11-25`,
        ),
    }),
    getHotelsByName: builder.query({
      query: name =>
        createRequest(`hotels/locations?name=${name}&search_type=HOTEL`),
    }),
    getAutoSugest: builder.query({
      query: name =>
        createRequest(
          `hotels/autoSuggest?string=${name}&get_pois=true&combine_regions=true&get_hotels=true`,
        ),
    }),
  }),
});

export const {
  useGetHotelsByNameQuery,
  useGetHotelsByDateQuery,
  useGetAutoSugestQuery,
} = apiSlice;
