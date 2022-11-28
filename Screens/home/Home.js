import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import Search from '../../components/UI/organisms/Search';
// import {UseGetDataBySuggest} from '../../src/features/api/apiSliceQuery';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHotels} from '../../src/features/api/apiSliceRedux';

export default function Home() {
  // const {data, isLoading} = UseGetDataBySuggest();
  // const dataHotels = data?.getHotelAutoSuggestV2?.results?.result?.hotels;

  // let myKeys = Object?.values(dataHotels);
  // console.log(myKeys);

  // console.log(typeof dataHotels, 'data API  h');
  // console.log(dataHotels, 'data API  h');
  // console.log(dataH, 'data API');
  // console.log(typeof dataH, 'data API hh');

  // dataHotels ? Object.keys(dataHotels) : console.log('object is falsy');
  const dispatch = useDispatch();
  const {hotels} = useSelector(state => state.api);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  console.log('data API', hotels);

  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={hotels}
        renderItem={({item}) => (
          <View>
            <Image
              source={{uri: `https:${item.thumbnail}`}}
              style={{width: 100, height: 100}}
            />

            <Text>{item.hotel_name}</Text>
          </View>
        )}
      />

      {/* <ScrollView>
        <View className="mt-4">
          <Search />
        </View>

        <View className="mx-2">
          <Text className="text-lg font-bold text-gray-700 mt-4">
            Kota-kota di Indonesia
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mx-2">
          <View className="flex flex-row mt-4">
            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/kota/jakarta.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Jakarta
              </Text>
            </View>

            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/kota/bandung.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Bandung
              </Text>
            </View>

            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/kota/palembang.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Palembang
              </Text>
            </View>
          </View>
        </ScrollView>

        <View className="mx-2">
          <Text className="text-lg font-bold text-gray-700 mt-4">
            Popular Destinations
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mx-2 pb-4">
          <View className="flex flex-row mt-4">
            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/destinations/dubai.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Dubai, United Arab Emirates
              </Text>
            </View>

            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/destinations/Hurghada.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Hurghada, Egypt
              </Text>
            </View>

            <View className="flex flex-col items-center mr-4">
              <Image
                source={require('../../assets/img/destinations/paris.jpg')}
                style={{width: 150, height: 150, borderRadius: 10}}
              />
              <Text className="text-gray-700 text-sm font-semibold mt-2">
                Paris, France
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView> */}
    </SafeAreaView>
  );
}
