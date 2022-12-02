import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../src/features/favorites/favoritesSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function Favorites({navigation}) {
  const dispatch = useDispatch();

  const {favorites} = useSelector(state => state.favorites);

  const handleAddFavorite = item => {
    dispatch(addFavorite(item));
  };

  const handleRemoveFavorite = item => {
    dispatch(removeFavorite(item));
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        underlayColor={'white'}
        onPress={() =>
          navigation.navigate('Detail Hotel', {id: item?.hotelId})
        }>
        <View className="mb-4 mx-2 bg-white" key={index}>
          <View className="mt-4">
            <Image
              className="w-full rounded-md h-40 object-cover"
              source={{uri: item?.thumbnailUrl}}
            />

            <View className="absolute right-3 mt-3">
              <TouchableHighlight
                className="bg-white w-8 h-8 shadow shadow-gray-100 rounded-full"
                underlayColor={'transparent'}
                onPress={() => {
                  favorites?.find(
                    favorite => favorite?.hotelId === item?.hotelId,
                  )
                    ? handleRemoveFavorite(item?.hotelId)
                    : handleAddFavorite(item);
                }}>
                <View className="ml-1.5 mt-1.5">
                  <Icon
                    name="favorite"
                    size={20}
                    color={
                      favorites?.find(
                        favorite => favorite?.hotelId === item?.hotelId,
                      )
                        ? '#E0144C'
                        : '#D6E4E5'
                    }
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center">
            <View className="mt-2 w-72">
              <Text className="text-gray-900 font-semibold text-base">
                {item?.name}
              </Text>

              <View className="flex flex-row items-center">
                <Text>
                  <Icon name="star" size={15} color="#F2C94C" />
                </Text>

                <Text>{item?.starRating}</Text>
              </View>

              <Text className="text-gray-500 text-sm">
                {item?.location?.address?.cityName} -{' '}
                {item?.location?.address?.countryName}
              </Text>
            </View>

            <View>
              <Text className="text-blue-500 font-bold text-lg">
                ${item?.ratesSummary?.minPrice}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView className="bg-white max-h-screen">
      <FlatList data={favorites} renderItem={renderItem} />
    </SafeAreaView>
  );
}
