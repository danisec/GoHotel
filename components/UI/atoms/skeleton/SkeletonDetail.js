import React from 'react';
import {ScrollView, View, Text} from 'react-native';

export default function SkeletonDetail() {
  return (
    <ScrollView role="status" className="mb-4 mx-2 animate-pulse bg-white">
      <View>
        <View className="w-full h-40 rounded-md object-cover bg-gray-100" />

        <View className="m-2">
          <View className="mt-2">
            <Text className="mb-2 h-2.5 w-72 rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-20 rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-52 rounded-full bg-gray-100" />
          </View>

          <View className="mt-4">
            <Text className="mb-2 h-2.5 w-32 rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-full rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-72 rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-full rounded-full bg-gray-100" />
            <Text className="mb-2 h-2.5 w-64 rounded-full bg-gray-100" />
          </View>

          <View className="mt-4">
            <Text className="mb-2 h-2.5 w-32 rounded-full bg-gray-100" />

            <View className="mt-2">
              <View>
                <Text className="mb-2 h-2.5 w-20 rounded-full bg-gray-100" />
                <Text className="mb-2 h-2.5 w-20 rounded-full bg-gray-100" />
                <Text className="mb-2 h-2.5 w-20 rounded-full bg-gray-100" />
              </View>
            </View>
          </View>

          <View className="mt-8 mb-4 flex flex-row justify-center bg-gray-100 rounded-full p-6" />
        </View>
      </View>
    </ScrollView>
  );
}
