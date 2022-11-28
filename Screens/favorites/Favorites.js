import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {UseGetDataBySuggest} from '../../src/features/api/apiSliceQuery';
export default function Favorites() {
  const {data, isLoading} = UseGetDataBySuggest();
  const dataHotels = data?.getHotelAutoSuggestV2?.results?.result?.hotels;
  console.log(dataHotels, 'data API');

  const Item = ({item}) => {
    return (
      <View>
        <Text className={'text-blue-400'}>{item.hotel_name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        className="bg-red-200"
        data={dataHotels}
        renderItem={Item}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
