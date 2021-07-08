import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

// Utils
import { mockIncrement } from 'utilities/mockAPI';
import { CounterState } from './interface';

// Async actions
export const incrementByAmountAsync = createAsyncThunk(
	'counter/incrementByAmount',
	async (payload: number, { rejectWithValue }) => {
		try {
			const response = await mockIncrement(payload);
			return response.data;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

// Types

const initialState: CounterState = {
	value: 0,
	loading: 'idle',
	error: null
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value = state.value + 1;
		},
		decrement: (state) => {
			state.value = state.value - 1;
		},
		incrementByAmount: (state, { payload }: PayloadAction<number>) => {
			state.value = state.value + payload;
		},
		reset: () => initialState
	}
});

// Slice action creators
export const { increment, decrement, reset } = counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
