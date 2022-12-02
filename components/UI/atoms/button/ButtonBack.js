import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native';

export default function ButtonBack() {
  const navigate = useNavigation();

  return (
    <TouchableHighlight
      className="flex flex-row justify-center px-2"
      onPress={() => navigate.navigate('Profile')}
      underlayColor="transparent">
      <Icon name="arrow-back" size={20} color="#000" />
    </TouchableHighlight>
  );
}
