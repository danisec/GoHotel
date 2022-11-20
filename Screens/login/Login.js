import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {authUser} from '../../src/features/auth/authSlice';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const {user, status} = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = text => {
    setEmail(text);
  };

  const passwordHandler = text => {
    setPassword(text);
  };

  const loginHandler = () => {
    dispatch(authUser({email, password}));
  };

  useEffect(() => {
    if (user !== null) {
      navigate.navigate('Home');
    } else {
      navigate.navigate('Account');
    }
  }, [user, navigate]);

  return (
    <SafeAreaView className="p-2 h-full pt-28 bg-white">
      <View className="flex flex-row justify-center">
        <Text className="text-lg font-semibold">Sign In</Text>
      </View>

      <View className="flex flex-row justify-center">
        <Text className="text-sm text-gray-500">
          Sign in to your account to continue
        </Text>
      </View>

      <View className="flex flex-row justify-center mt-4">
        <TextInput
          className="border border-gray-100 rounded-md p-2 w-3/4"
          placeholder="Email"
          onChangeText={emailHandler}
        />
      </View>

      <View className="flex flex-row justify-center mt-4">
        <TextInput
          className="border border-gray-100 rounded-md p-2 w-3/4"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={passwordHandler}
        />
      </View>

      <View className="flex flex-row justify-center mt-4">
        <TouchableHighlight
          className="bg-blue-500 rounded-full py-3 mt-2 w-3/4"
          underlayColor={'#2192FF'}
          onPress={loginHandler}>
          <Text className="text-white text-center">
            {status === 'loading' ? 'Loading...' : 'Sign In'}
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Login;