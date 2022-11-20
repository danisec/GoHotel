import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native';

export default function ButtonClose() {
  const navigate = useNavigation();

  return (
    <TouchableHighlight
      className="flex flex-row justify-center px-2"
      onPress={() => navigate.navigate('Profile Settings')}
      underlayColor="transparent">
      <Icon name="close" color="#000" size={24} />
    </TouchableHighlight>
  );
}
