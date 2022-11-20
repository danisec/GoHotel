import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const token = 'WuieWUNOPP9893nn89';

const initialState = {
  user: null,
  status: 'idle',
};

function loginUser(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === 'user@gohotel.com' && password === 'user123') {
        resolve({
          token: token,
        });
      } else {
        reject('Invalid email or password');
      }
    }, 100);
  });
}

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({email, password}) => {
    try {
      const res = await loginUser(email, password);
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;
