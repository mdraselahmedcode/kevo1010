// // src/store/index.ts
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { baseApi } from './api/baseApi';

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
// });
// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './authSlice';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer, // RTK Query reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware), // RTK Query middleware
});

// types for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
