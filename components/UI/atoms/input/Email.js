import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput} from 'react-native';

const Email = () => {
  return (
    <SafeAreaView className="px-2 py-4 h-full bg-white">
      <ScrollView>
        <View>
          <Text className="text-gray-900 font-semibold text-base">Email</Text>
        </View>

        <View>
          <TextInput
            className="border-b border-gray-100"
            placeholder="user@gohotel.com"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Email;
