import {configureStore} from '@reduxjs/toolkit';
import reducer from './CursorSlice.js'
export const store = configureStore({
     reducer:reducer
});