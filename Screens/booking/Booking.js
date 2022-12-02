import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  booking,
  checkoutBooking,
} from '../../src/features/booking/bookingSlice';
import CheckoutModal from '../../components/UI/molecules/modal/CheckoutModal';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

export default function Booking({navigation}) {
  const dispatch = useDispatch();

  const getBooking = useSelector(state => state.detail.hotel);

  const [modalVisible, setModalVisible] = useState(false);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  const changeInputName = text => {
    setInputName(text);
  };

  const changeInputEmail = text => {
    setInputEmail(text);
  };

  const changeInputPhone = text => {
    setInputPhone(text);
  };

  const addListBookingHandler = item => {
    dispatch(checkoutBooking(item));
  };

  const bookingHandler = () => {
    dispatch(
      booking({
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
      }),
    );

    setInputName('');
    setInputEmail('');
    setInputPhone('');
  };

  return (
    <SafeAreaView className="p-2 h-full bg-white">
      <ScrollView>
        <View>
          <Text className="uppercase text-base text-gray-900 font-semibold">
            Contact Information
          </Text>
        </View>
        <View className="mt-4">
          <View>
            <Text className="text-base text-gray-900 font-medium">
              Full Name
            </Text>
            <TextInput
              className="border-b border-gray-100"
              placeholder="Full Name"
              onChangeText={changeInputName}
            />
          </View>

          <View>
            <Text className="mt-2 text-base text-gray-900 font-medium">
              Email
            </Text>
            <TextInput
              className="border-b border-gray-100"
              placeholder="example@gmail.com"
              onChangeText={changeInputEmail}
            />
          </View>

          <View>
            <Text className="mt-2 text-base text-gray-900 font-medium">
              No Telp
            </Text>
            <TextInput
              className="border-b border-gray-100"
              placeholder="+62 123456789"
              keyboardType="numeric"
              onChangeText={changeInputPhone}
            />
          </View>

          <View className="my-4">
            <Text className="uppercase text-base text-gray-900 font-semibold">
              Price Summary
            </Text>
          </View>

          <View className="flex flex-row justify-start gap-2">
            <Text className="text-sm text-gray-700 font-medium">3 days,</Text>
            <Text className="text-sm text-gray-700 font-medium">1 Room,</Text>
            <Text className="text-sm text-gray-700 font-medium">2 Guest,</Text>
          </View>

          <View className="flex flex-row justify-between border-b border-gray-300 py-2">
            <Text className="mt-2 text-base text-gray-900 font-medium">
              Total Price
            </Text>
            <Text className="mt-2 text-base text-gray-900 font-medium">
              $534,67
            </Text>
          </View>
        </View>

        <CheckoutModal
          title={'Success'}
          span={'Booking Success'}
          titleNavigate={'Back To Home'}
          buttonName={'Continue'}
          visible={modalVisible}
          requestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
          pressable={() => {
            setModalVisible(!modalVisible);
            navigation.navigate('Home');
          }}
          pressTouch={
            inputName === '' || inputEmail === '' || inputPhone === ''
              ? () => {
                  Alert.alert('Please fill all fields');
                }
              : () => {
                  bookingHandler();
                  setModalVisible(!modalVisible);
                  addListBookingHandler(getBooking);
                }
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
