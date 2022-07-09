import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api/cities';

interface CitiesState {
cities: [],
isLoading: false | true,    
}

const initialState = {
  cities: [],
  isLoading: false,
} as CitiesState;

export const fetchCitiesData = createAsyncThunk(
  'cities',
  async () => {
    try {
      const { data } = await api.fetchCities();

      return data;
    } catch (error) {
        throw error;
    }
  }
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder => {
      builder.addCase(fetchCitiesData.pending, (state) => {
        state.isLoading = true;    
      });
      builder.addCase(fetchCitiesData.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;    
      });
      builder.addCase(fetchCitiesData.rejected, (state) => {
        state.isLoading = false;    
      });
  },
});

export default citiesSlice.reducer;
