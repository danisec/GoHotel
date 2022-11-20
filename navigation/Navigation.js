import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/home/Home';
import Favorites from '../Screens/favorites/Favorites';
import Profile from '../Screens/profile/Profile';
import Login from '../Screens/login/Login';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const {user} = useSelector(state => state.auth);

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
          component={user ? Favorites : Login}
          options={{
            headerShown: user ? true : false,
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
          name={user ? 'Profile' : 'Account'}
          component={user ? Profile : Login}
          options={{
            headerShown: user ? true : false,
            headerTitle: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            tabBarLabel: user ? 'Profile' : 'Account',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
