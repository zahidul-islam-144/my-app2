import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TAuthState } from '@/types/auth.type';


const initialState: TAuthState = {
  loginUser: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'slice/authSlice',
  initialState,
  reducers: {
      setLoginUser: (state, action) => {
      const { loginUser, accessToken } = action.payload;
      console.log('authSlice', action.payload)
      state.loginUser = loginUser;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.loginUser = null;
      state.accessToken = null;
    },
  },
});

export const { setLoginUser, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
export const currentAccessToken = (state: RootState) => state.auth.accessToken;
export const currentLoginUser = (state: RootState) => state.auth.loginUser;