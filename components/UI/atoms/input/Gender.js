import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateGender} from '../../../../src/features/profile/profileSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

const Gender = () => {
  const dispatch = useDispatch();

  const [inputGender, setInputGender] = useState('');

  const gender = useSelector(state => state.profile.gender);

  const changeInputGender = text => {
    setInputGender(text);
  };

  const genderHandler = text => {
    dispatch(updateGender({gender: text}));
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView className="px-2 py-4 h-full bg-white">
        <ScrollView>
          <View>
            <Text className="text-gray-900 font-semibold text-base">
              Gender
            </Text>
          </View>

          <View className="flex flex-row justify-between border-b border-gray-100">
            <TextInput
              placeholder={gender ? gender : 'Gender'}
              onChangeText={changeInputGender}
            />

            <TouchableHighlight
              className="mt-3"
              underlayColor={'transparent'}
              onPress={
                inputGender === ''
                  ? () => Alert.alert('Gender', 'Please enter your gender')
                  : () => genderHandler(inputGender)
              }>
              {inputGender.length > 0 ? (
                <Icon name="check" size={24} color="#2192FF" />
              ) : (
                <Icon name="check" size={24} color="transparent" />
              )}
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Gender;
