import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../../../src/features/auth/authSlice';
import {Text, TouchableHighlight} from 'react-native';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate.navigate('Home');
  };

  return (
    <TouchableHighlight
      className="flex flex-row justify-center px-2"
      onPress={handleLogout}
      underlayColor="transparent">
      <Text className="text-base font-semibold text-gray-900">Logout</Text>
    </TouchableHighlight>
  );
};

export default ButtonLogout;
