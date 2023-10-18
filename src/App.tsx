import React, { useState } from 'react'
import Router from './components/layout/Router/Router';
import { BookSortContext } from './store/BookSortContext';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/store';

const App = () => {

    const [bookSortByCategory, setBookSortByCategory] = useState<string>('');
    const [bookSortByRelevance, setBookSortByRelevance] = useState('relevance');
    const [searchQuery, setSearchQuery] = useState('');


    const store = setupStore();
    return (
        <div className='App'>

            <BookSortContext.Provider value={{
                bookSortByCategory,
                setBookSortByCategory,
                bookSortByRelevance,
                setBookSortByRelevance,
                searchQuery,
                setSearchQuery

            }}>
                <BrowserRouter>
                    <Provider store={store}>
                        <Router />
                    </Provider>
                </BrowserRouter>
            </BookSortContext.Provider>


        </div>
    )
}

export default App
