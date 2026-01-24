import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Profile, ProfileState } from '@/types';
import { profileData } from '@/data/profile';

const initialState: ProfileState = {
  data: profileData,
  status: 'idle',
  error: null,
};

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
  const response = await fetch('/api/profile');
  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }
  return response.json() as Promise<Profile>;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch profile';
      });
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
