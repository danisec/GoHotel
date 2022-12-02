import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail} from '../../../../src/features/profile/profileSlice';
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

const Email = () => {
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState('');

  const email = useSelector(state => state.profile.email);

  const changeInputEmail = text => {
    setInputEmail(text);
  };

  const emailHandler = text => {
    dispatch(updateEmail({email: text}));
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView className="px-2 py-4 h-full bg-white">
        <ScrollView>
          <View>
            <Text className="text-gray-900 font-semibold text-base">Email</Text>
          </View>

          <View className="flex flex-row justify-between border-b border-gray-100">
            <TextInput
              placeholder={email ? email : 'example@gmail.com'}
              onChangeText={changeInputEmail}
            />

            <TouchableHighlight
              className="mt-3"
              underlayColor={'transparent'}
              onPress={
                inputEmail === ''
                  ? () => Alert.alert('Email', 'Please enter your email')
                  : () => emailHandler(inputEmail)
              }>
              {inputEmail.length > 0 ? (
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

export default Email;
