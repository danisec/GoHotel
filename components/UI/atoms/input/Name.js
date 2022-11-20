import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput} from 'react-native';

const Name = () => {
  return (
    <SafeAreaView className="px-2 py-4 h-full bg-white">
      <ScrollView>
        <View>
          <Text className="text-gray-900 font-semibold text-base">Name</Text>
        </View>

        <View>
          <TextInput
            className="border-b border-gray-100"
            placeholder="Gorden Norman"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Name;
