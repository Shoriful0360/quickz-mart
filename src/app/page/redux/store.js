import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice"; // import default reducer

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});
