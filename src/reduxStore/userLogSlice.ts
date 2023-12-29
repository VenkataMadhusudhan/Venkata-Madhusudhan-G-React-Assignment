import { createSlice } from '@reduxjs/toolkit';

// Define the state type
interface UserLoginStatusState {
  isLoggedIn: boolean;
}

// Initial state
const initialState: UserLoginStatusState = {
  isLoggedIn: false,
};

// Create the slice
const userLoginStatusSlice = createSlice({
  name: 'userLoginStatus',
  initialState,
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    },
  },
});

// Export actions and reducer
export const { loggedIn, loggedOut } = userLoginStatusSlice.actions;
export default userLoginStatusSlice.reducer;
