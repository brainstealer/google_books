import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../shared/models/IBook";
import { fetchBooks } from './ActionCreators';


export interface BookState {
    kind?: string;
    totalItems?: number;
    items?: IBook[];
    isLoading?: boolean;
    error?: string;

}

const initialState: BookState = {
    kind: '',
    totalItems: 0,
    items: [],
    isLoading: false,
    error: ''
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBook[]>) => {
            state.isLoading = false;
            state.error = '';
            state.items = action.payload;
        },
        [fetchBooks.pending.type]: (state) => {
            state.isLoading = true;
        },

        [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default bookSlice.reducer;