import React from 'react';
import {ScrollView, View, Text} from 'react-native';

export default function Skeleton() {
  return (
    <ScrollView role="status" className="mb-4 mx-2 animate-pulse bg-white">
      <View className="mt-4">
        <View className="w-full h-40 rounded-md object-cover bg-gray-100" />
      </View>

      <View className="flex flex-row justify-between items-center">
        <View className="mt-2 w-72">
          <Text className="mb-2 h-2.5 w-72 rounded-full bg-gray-100" />

          <Text className="mb-2 h-2.5 w-20 rounded-full bg-gray-100" />

          <Text className="mb-2 h-2.5 w-48 rounded-full bg-gray-100" />
        </View>

        <View>
          <Text className="h-2.5 w-16 rounded-full bg-gray-100" />
        </View>
      </View>
    </ScrollView>
  );
}
