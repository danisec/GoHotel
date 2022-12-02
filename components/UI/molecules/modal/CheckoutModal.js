import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TouchableHighlight,
} from 'react-native';

export default function CheckoutModal({
  title,
  span,
  titleNavigate,
  buttonName,
  visible,
  requestClose,
  pressable,
  pressTouch,
}) {
  return (
    <View>
      <Modal
        className="bg-blue-500"
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={requestClose}>
        <View className="flex-1 justify-center items-center mt-22 bg-black/20">
          <View className="bg-white rounded-2xl px-24 py-6 items-center shadow shadow-black/25">
            <View className="bg-lime-500 rounded-full p-6 absolute -mt-8">
              <Icon name="check" size={30} color="white" />
            </View>

            <Text className="mt-14 text-center text-gray-900 font-semibold text-xl">
              {title}
            </Text>

            <Text className="mt-4 text-center text-gray-900 font-normal text-base">
              {span}
            </Text>

            <Pressable
              className="mt-10 bg-lime-500 rounded-full p-3"
              onPress={pressable}>
              <Text className="text-white text-base font-semibold">
                {titleNavigate}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        className="mt-10 flex flex-row justify-center bg-blue-500 rounded-full p-3"
        underlayColor={'#2192FF'}
        onPress={pressTouch}>
        <Text className="text-white text-base font-semibold">{buttonName}</Text>
      </TouchableHighlight>
    </View>
  );
}
