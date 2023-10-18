import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IBook, IBookResp } from '../shared/models/IBook';


interface IQuery {
    searchQuery: string;
    bookSortByRelevance: string;
    startIndex: number;
}

export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    tagTypes: ['search'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
    endpoints: (build) => ({
        fetchAllBooks: build.query<IBookResp, IQuery>({
            query: (search: IQuery) => ({
                url: '/volumes',
                params: {
                    q: search.searchQuery,
                    orderBy: search.bookSortByRelevance,
                    maxResults: 40,
                    startIndex: search.startIndex,
                    key: 'AIzaSyCbdntsf6nLo6jfOz75BCI5bpWI574MdOo'
                },
                provideTags: (search: string) => [{
                    type: 'search',
                    id: search
                }],
            })
        }),
        fetchIdBook: build.query<IBook, any>({
            query: (bookId: any) => ({
                url: `/volumes/${bookId}`,
                params: {
                    key: 'AIzaSyCbdntsf6nLo6jfOz75BCI5bpWI574MdOo'
                },
                provideTags: (search: string) => [{
                    type: 'search',
                    id: search
                }],
            })
        })
    })
})