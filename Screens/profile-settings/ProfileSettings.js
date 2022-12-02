import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ProfileSettings = () => {
  const navigate = useNavigation();

  const {name, email, gender} = useSelector(state => state.profile);

  return (
    <SafeAreaView className="px-2 py-4 h-full bg-white">
      <ScrollView>
        <View>
          <Text className="uppercase text-gray-900 font-semibold text-sm">
            My Account
          </Text>
        </View>

        <TouchableOpacity
          className="mt-2 flex flex-row justify-between border-b border-gray-100 py-4"
          onPress={() => navigate.navigate('Name')}>
          <Text className="text-gray-700 text-base font-semibold">
            Full Name
          </Text>
          <Text className="text-gray-500 text-base font-normal">
            {name ? name : 'Gorden Norman'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-2 flex flex-row justify-between border-b border-gray-100 py-4"
          onPress={() => navigate.navigate('Email')}>
          <Text className="text-gray-700 text-base font-semibold">Email</Text>
          <Text className="text-gray-500 text-base font-normal">
            {email ? email : '@gorden.norman'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-2 flex flex-row justify-between border-b border-gray-100 py-4"
          onPress={() => navigate.navigate('Gender')}>
          <Text className="text-gray-700 text-base font-semibold">Gender</Text>
          <Text className="text-gray-500 text-base font-normal">
            {gender ? gender : 'unkown'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;
