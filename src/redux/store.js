import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore, createStore } from "@reduxjs/toolkit";
//
import { rootReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";

// ----------------------------------------------------------------------

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  });

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();
const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper, useSelector, useDispatch };
