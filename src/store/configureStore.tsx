import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities';
import sourcesReducer from './sources';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    sources: sourcesReducer,
  },
});

export default store;
