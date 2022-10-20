import { createSlice } from "@reduxjs/toolkit";

const aligmentParametrsSlice = createSlice({
  name: 'aligmentParametrs',
  initialState: {
    currentAlignSelf: 'flex-start',
    currentAlignText: 'left'
  },
  reducers: {
    changeAlignSelf: (state) => {
      switch (state.currentAlignSelf) {
        case 'flex-start':
          state.currentAlignSelf = 'center';
          state.currentAlignText = 'center';
          break;
        case 'center':
          state.currentAlignSelf = 'flex-end';
          state.currentAlignText = 'right';
          break;
        case 'flex-end':
          state.currentAlignSelf = 'flex-start';
          state.currentAlignText = 'left';
          break;
        default:
          throw new Error('Uncurrent work of AlignSelfHandler or  AlignTextHandler');
      }
    }
  }
});

export const { changeAlignSelf } = aligmentParametrsSlice.actions;
export default aligmentParametrsSlice.reducer;
