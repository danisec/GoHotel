import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ButtonBack from '../components/UI/atoms/button/ButtonBack';
import ButtonBackSearch from '../components/UI/atoms/button/ButtonBackSearch';
import ButtonClose from '../components/UI/atoms/button/ButtonClose';

import Home from '../Screens/home/Home';
import Search from '../Screens/search/Search';
import DetailHotel from '../Screens/detail-hotel/DetailHotel';
import Booking from '../Screens/booking/Booking';
import Favorites from '../Screens/favorites/Favorites';
import Profile from '../Screens/profile/Profile';
import ProfileSettings from '../Screens/profile-settings/ProfileSettings';
import Login from '../Screens/login/Login';

import Name from '../components/UI/atoms/input/Name';
import Email from '../components/UI/atoms/input/Email';
import Gender from '../components/UI/atoms/input/Gender';

const Tab = createBottomTabNavigator();

const Navigation = () => {
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
          name="Search Results"
          component={Search}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Search Results',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
          }}
        />

        <Tab.Screen
          name="Detail Hotel"
          component={DetailHotel}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Detail Hotel',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerLeft: () => <ButtonBackSearch />,
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={user ? Favorites : Login}
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
          name="Booking"
          component={user ? Booking : Login}
          options={{
            tabBarButton: () => null,
            headerShown: user ? true : false,
            tabBarLabel: 'Booking',
            headerTitle: 'Book Now',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="book" color={color} size={size} />
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

        <Tab.Screen
          name="Profile Settings"
          component={user ? ProfileSettings : Login}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Edit Profile',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerLeft: () => <ButtonBack />,
          }}
        />

        <Tab.Screen
          name="Name"
          component={user ? Name : Login}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Change Name',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerLeft: () => <ButtonClose />,
          }}
        />

        <Tab.Screen
          name="Email"
          component={user ? Email : Login}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Change Email',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerLeft: () => <ButtonClose />,
          }}
        />

        <Tab.Screen
          name="Gender"
          component={user ? Gender : Login}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Change Gender',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerLeft: () => <ButtonClose />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
