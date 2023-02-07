
import { configureStore } from '@reduxjs/toolkit';
import {progectsApi}  from './progectsSlice';
import {filter} from './reducers';

export const store = configureStore({
  reducer: {
    [progectsApi.reducerPath]: progectsApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    progectsApi.middleware,
  ],
});