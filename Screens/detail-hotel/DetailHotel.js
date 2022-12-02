import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {detailHotels} from '../../src/features/detail-hotel/detailHotelSlice';
import SkeletonDetail from '../../components/UI/atoms/skeleton/SkeletonDetail';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function DetailHotel({route, navigation}) {
  const dispatch = useDispatch();
  const {id} = route.params;

  const {hotel, status} = useSelector(state => state.detail);
  const {user} = useSelector(state => state.auth);

  const bookingHandle = () => {
    if (user) {
      navigation.navigate('Booking', {id: hotel?.hotelId});
    } else {
      navigation.navigate('Account');
    }
  };

  useEffect(() => {
    dispatch(detailHotels(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <SafeAreaView className="bg-white" key={hotel?.hotelId}>
      {status === 'loading' ? (
        <SkeletonDetail />
      ) : (
        <ScrollView>
          <View>
            <Image
              className="w-full h-40 object-cover"
              source={{uri: hotel?.images?.[0]?.imageHDUrl}}
            />

            <View className="m-2">
              <View className="mt-2">
                <Text className="text-gray-900 font-semibold text-lg">
                  {hotel?.name}
                </Text>

                <View className="flex flex-row items-center">
                  <Text>
                    <Icon name="star" size={15} color="#F2C94C" />
                  </Text>

                  <Text>{hotel?.starRating}</Text>
                </View>

                <Text className="text-gray-500 text-sm">
                  {hotel?.location?.address?.addressLine1}
                  {', '}
                  {hotel?.location?.address?.cityName} -{' '}
                  {hotel?.location?.address?.countryName}{' '}
                  {hotel?.location?.address?.zip}
                </Text>
              </View>

              <View className="mt-4">
                <Text className="text-gray-700 font-semibold text-lg">
                  Description
                </Text>

                <Text className="mt-1 text-gray-900 font-normal text-sm">
                  {hotel?.description}
                </Text>
              </View>

              <View className="mt-4">
                <Text className="text-gray-700 font-semibold text-lg">
                  Facilities
                </Text>

                <View className="mt-2">
                  {hotel?.hotelFeatures?.features?.map((item, index) => (
                    <View key={index}>
                      <Text
                        className="mr-2 text-gray-900 font-normal text-sm"
                        key={index}>
                        {index + 1}
                        {'. '}
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <TouchableHighlight
                className="mt-8 mb-4 flex flex-row justify-center bg-blue-500 rounded-full p-3"
                underlayColor={'#2192FF'}
                onPress={() => bookingHandle()}>
                <Text className="text-white text-base font-semibold">
                  Book This Hotel
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
