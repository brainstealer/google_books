import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import BooksList from '../../screens/BookList/BooksList';
import BookCard from '../../BookCard/BookCard';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<BooksList />} />
                    <Route path=':id' element={<BookCard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router