import axios from "axios";
import { AppDispatch } from "../store";
import { IBook, IBookResp } from "../../shared/models/IBook";
import { BookState } from './BookSlice'
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchBooks = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(bookSlice.actions.booksFetching());
//         const response = await axios.get<IBook[]>('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyCbdntsf6nLo6jfOz75BCI5bpWI574MdOo');
//         dispatch(bookSlice.actions.booksFetchingSuccess(response.data));


//     } catch (error: any) {
//         dispatch(bookSlice.actions.booksFetchingError(error.message))
//     }
// }

export const fetchBooks = createAsyncThunk(
    'book/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IBookResp>('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyCbdntsf6nLo6jfOz75BCI5bpWI574MdOo');
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)