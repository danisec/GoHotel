import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateName} from '../../../../src/features/profile/profileSlice';
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

const Name = () => {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');

  const name = useSelector(state => state.profile.name);

  const changeInputName = text => {
    setInputName(text);
  };

  const nameHandler = text => {
    dispatch(updateName({name: text}));
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView className="px-2 py-4 h-full bg-white">
        <ScrollView>
          <View>
            <Text className="text-gray-900 font-semibold text-base">
              Full Name
            </Text>
          </View>

          <View className="flex flex-row justify-between border-b border-gray-100">
            <TextInput
              placeholder={name ? name : 'Full Name'}
              onChangeText={changeInputName}
            />

            <TouchableHighlight
              className="mt-3"
              underlayColor={'transparent'}
              title={'toast notification'}
              onPress={
                inputName === ''
                  ? () => Alert.alert('Name', 'Please enter your name')
                  : () => nameHandler(inputName)
              }>
              {inputName.length > 0 ? (
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

export default Name;
