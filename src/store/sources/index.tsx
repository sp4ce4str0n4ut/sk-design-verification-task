import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api/sources';

interface SourcesState {
sources: any[],
isLoading: false | true,    
}

const initialState = {
  sources: [],
  isLoading: false,
} as SourcesState;

export const fetchSourcesData = createAsyncThunk(
  'sources',
  async () => {
    try {
      const { data } = await api.fetchSources();
      let response: any[] = [];

      for (let item of data) {
        response.push({
          id: item,
          name: item,
        });
      }

      return response;
    } catch (error) {
        throw error;
    }
  }
);

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState,
  reducers: {},
  extraReducers: builder => {
      builder.addCase(fetchSourcesData.pending, (state) => {
        state.isLoading = true;    
      });
      builder.addCase(fetchSourcesData.fulfilled, (state, action) => {
        state.sources = action.payload;
        state.isLoading = false;    
      });
      builder.addCase(fetchSourcesData.rejected, (state) => {
        state.isLoading = false;    
      });
  },
});

export default sourcesSlice.reducer;
