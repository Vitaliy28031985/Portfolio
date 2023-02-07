import { createReducer } from '@reduxjs/toolkit';
import {filterProgects} from './actions';


export const filter = createReducer('', {
  [filterProgects]: (_, { payload }) => payload,
});