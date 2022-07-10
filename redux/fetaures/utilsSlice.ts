import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    lightMode: false,
  },
  reducers: {
    setLightMode: (state: any, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
    },
  },
});

export const { setLightMode } = utilsSlice.actions;
export default utilsSlice.reducer;
