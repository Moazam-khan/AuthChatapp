import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import isEqual from "lodash/isEqual";
import { RootState } from "../store";

type UserState = {
  //user: User | null;
  user: any;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
};

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  token: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login(state, action: PayloadAction<UserState>) {
      console.warn("gooooonna login with payload", action.payload);
      state = action.payload;
      return state;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      return state;
    },
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      if (!isEqual(state.user, action.payload)) {
        state.user = action.payload;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      state = initialState;
      return state;
    },
  },
});

export const { login, setToken, setUser, logout } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
