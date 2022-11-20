import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/home/Home';
import Favorites from '../Screens/favorites/Favorites';
import Profile from '../Screens/profile/Profile';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: 'GoHotel',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: true,
            tabBarLabel: 'Favorites',
            headerTitle: 'Favorites',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="favorite" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={Profile}
          options={{
            headerShown: true,
            headerTitle: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
