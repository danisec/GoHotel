import {createSlice} from '@reduxjs/toolkit';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const initialState = {
  name: '',
  email: '',
  gender: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload.name;

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Name has been updated',
      });
    },

    updateEmail(state, action) {
      state.email = action.payload.email;

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Email has been updated',
      });
    },

    updateGender(state, action) {
      state.gender = action.payload.gender;

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Gender has been updated',
      });
    },
  },
});

export const {updateName, updateEmail, updateGender} = profileSlice.actions;

export default profileSlice.reducer;
