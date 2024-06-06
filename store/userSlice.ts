import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  surname: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
