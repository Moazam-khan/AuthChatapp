import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "../rootReducer";

const rootReducer = createRootReducer();

const persistConfig = {
  key: "rootkey",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  // @ts-ignore
  composeWithDevTools()
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: { ignoredActions: any[] };
    }) => any
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
