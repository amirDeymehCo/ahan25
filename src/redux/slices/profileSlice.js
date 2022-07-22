import { createSlice } from "@reduxjs/toolkit";
const initialState = { profile: {}, token: "spinner" };

const profileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    loadedProfile(state, action) {
      const token = localStorage.getItem("token");
      state.profile = action.payload;
      state.token = token;
      if (state.profile === null) {
        state.token = false;
      }
    },
    logout(state) {
      state.profile = {};
      state.token = false;
    },
  },
});

export const { loadedProfile, logout } = profileSlice.actions;
export default profileSlice.reducer;
