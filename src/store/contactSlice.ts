import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { ContactFormData, ContactFormState } from '@/types';

const initialState: ContactFormState = {
  status: 'idle',
  error: null,
};

export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return response.json();
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactForm: (state) => {
      state.status = 'idle';
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'error';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message || 'Failed to submit form';
      });
  },
});

export const { resetContactForm, setError } = contactSlice.actions;
export default contactSlice.reducer;
