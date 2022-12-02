import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonLogout from '../../components/UI/atoms/button/ButtonLogout';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function Profile({navigation}) {
  const navigate = useNavigation();

  const {listbooking} = useSelector(state => state.booking);
  const {favorites} = useSelector(state => state.favorites);

  const {name, email} = useSelector(state => state.profile);

  const handleEditProfile = () => {
    navigate.navigate('Profile Settings');
  };

  return (
    <SafeAreaView className="px-2 h-full bg-white/70">
      <ScrollView>
        <View className="bg-white p-4">
          <View className="flex flex-row justify-start gap-6">
            <Image
              source={require('../../assets/img/profile/profile_user.jpeg')}
              style={{width: 70, height: 70, borderRadius: 10}}
            />

            <View className="flex flex-col justify-center">
              <Text className="text-lg text-gray-900 font-semibold">
                {name ? name : 'Gorden Norman'}
              </Text>

              <Text className="text-sm text-gray-500">
                {email ? email : '@gorden.norman'}
              </Text>
            </View>
          </View>

          <View className="flex flex-row justify-between">
            <TouchableHighlight
              className="w-7/12 flex flex-row justify-center mt-4 bg-slate-100 py-2 rounded-md"
              underlayColor={'#F3F3F3'}
              onPress={handleEditProfile}>
              <Text className="text-base font-semibold text-gray-900">
                Edit Profile
              </Text>
            </TouchableHighlight>

            <View className="w-4/12 flex flex-row justify-center mt-4 bg-red-100 py-2 rounded-md">
              <ButtonLogout />
            </View>
          </View>
        </View>

        <View className="mt-2 py-4 flex flex-row justify-around bg-white shadow-md shadow-gray-200 rounded-lg">
          <View className="flex flex-col justify-center">
            <View>
              <Text className="text-gray-900 text-base font-semibold">
                Bookings
              </Text>
            </View>

            <View className="flex flex-row justify-center">
              <Text className="text-gray-900 font-semibold text-sm">
                {listbooking ? listbooking.length : 0}
              </Text>
            </View>
          </View>

          <View className="flex flex-col justify-center">
            <View>
              <Text className="text-gray-900 text-base font-semibold">
                Favorites
              </Text>
            </View>

            <View className="flex flex-row justify-center">
              <Text className="text-gray-900 font-semibold text-sm">
                {favorites ? favorites?.length : 0}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-2 first-letter:rounded-lg bg-white p-3">
          {listbooking?.map((item, index) => {
            return (
              <View
                className="flex flex-row justify-between items-center"
                key={index}>
                <View className="flex flex-row gap-4">
                  <View>
                    <Image
                      className="w-20 rounded-md h-20 object-cover"
                      source={{uri: item?.thumbnailUrl}}
                    />
                  </View>

                  <View>
                    <Text className="text-gray-900 font-semibold text-base">
                      {item?.name}
                    </Text>

                    <Text className="mt-1">
                      {item?.location?.address?.cityName}
                      {', '}
                      {item?.location?.address?.countryName}
                    </Text>

                    <View className="flex flex-row items-center mt-1">
                      <Text>
                        <Icon name="star" size={15} color="#F2C94C" />
                      </Text>

                      <Text>{item?.starRating}</Text>
                    </View>
                  </View>
                </View>

                <View className="right-0">
                  <TouchableHighlight
                    underlayColor={'white'}
                    onPress={() =>
                      navigation.navigate('Detail Hotel', {id: item?.hotelId})
                    }>
                    <Text className="text-blue-500 font-semibold text-sm">
                      View Details
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
