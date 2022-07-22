import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axiosInstance from "./../../utils/axios";
import { validateJWT } from './../../utils/validation';

const tokenKey = "token";

const slice = createSlice({
  name: "user",
  initialState: {
    form: {
      phone: null,
      email: null,
    },
    jwt: {
      loading: true,
      token: null,
      _id: null,
      iat: null,
      exp: null,
    },
  },
  reducers: {
    // UI Form
    phoneHasSet: (state, { payload }) => {
      state.form.phone = payload;
    },
    emailHasSet: (state, { payload }) => {
      state.form.email = payload;
    },

    // JWT
    loggedInWithJWT: ({ jwt }, { payload: token }) => {
      window.localStorage.setItem(tokenKey, token);

      setTokenHeader(token);

      const decoded = jwtDecode(token);
      Object.keys(jwt).forEach((key) => {
        jwt[key] = decoded[key];
      });

      jwt.token = token;
      jwt.loading = false;
    },
    loggedOut: (state) => {
      window.localStorage.removeItem(tokenKey);
      Object.keys(state.jwt).forEach((key) => {
        state.jwt[key] = null;
      });
      Object.keys(state.form).forEach((key) => {
        state.form[key] = null;
      });
    },
    jwtHasSetFromCache: ({ jwt }, { payload: token }) => {
      if (token === "undefined" || token == null) {
        jwt.loading = false;
        return;
      }

      setTokenHeader(token);

      const decoded = jwtDecode(token);

      Object.keys(jwt).forEach((key) => {
        jwt[key] = decoded[key];
      });

      jwt.token = token;
      jwt.loading = false;
    },
  },
});

export default slice.reducer;

const {
  phoneHasSet,
  emailHasSet,
  loggedInWithJWT,
  loggedOut,
  jwtHasSetFromCache,
} = slice.actions;

// ====== ACTIONS ======

// UI form
export const setUserPhone = (phone) => (dispatch) => {
  return dispatch({
    type: phoneHasSet.type,
    payload: phone,
  });
};

export const setUserEmail = (email) => (dispatch) => {
  return dispatch({
    type: emailHasSet.type,
    payload: email,
  });
};

// JWT
export const setJwtFromCache = () => (dispatch) => {
  const token = window.localStorage.getItem(tokenKey);

  return dispatch({
    type: jwtHasSetFromCache.type,
    payload: token,
  });
};

export const loginWithJWT = (jwt) => (dispatch) => {
  if(!validateJWT(jwt)) return;

  return dispatch({
    type: loggedInWithJWT.type,
    payload: {
      jwt,
    },
  });
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: loggedOut.type,
  });
};

// ====== SELECTORS =======
export const selectUser = (state) => state.user;
export const selectUserPhone = (state) => state.user.form.phone;
export const selectUserEmail = (state) => state.user.form.email;

// ====== FUNCTIONS =======
const setTokenHeader = (token) => {
  axiosInstance.defaults.headers.common.token = token;
};
