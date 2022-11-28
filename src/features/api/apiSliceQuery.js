import {useQuery} from '@tanstack/react-query';

const getDataBySuggest = async () => {
  const response = await fetch(
    'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest?string=new%20york&get_pois=true&combine_regions=true&get_hotels=true&get_airports=true&show_all_cities=true&get_regions=true&get_cities=true',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2d7743f4d2mshf45cc90e6b351d9p1b0197jsn637cd277910a',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    },
  );
  const convertRes = await response.json();
  return convertRes;
};

export const UseGetDataBySuggest = () => {
  const {isLoading, data} = useQuery(['DataSuggest'], getDataBySuggest);
  return {data, isLoading};
};
