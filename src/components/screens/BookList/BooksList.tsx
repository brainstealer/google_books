import { FC, useContext, useEffect, useMemo, useState } from 'react'
import { bookAPI } from '../../../services/BookService'
import { IBook } from '../../../shared/models/IBook'
import styles from './bookList.module.css'
import BookItem from '../BookItem/BookItem'
import { BookSortContext } from '../../../store/BookSortContext'
import Loader from '../../ui/loader/Loader'
import Button from '../../ui/button/Button'
const BooksList: FC = () => {
    const { searchQuery, bookSortByRelevance, bookSortByCategory } = useContext<any>(BookSortContext);
    const [booksArr, setBooksArr] = useState<any>([]);
    const [startIndex, setStartIndex] = useState<number>(0);
    const queryParamsObj: any = {
        searchQuery,
        bookSortByRelevance,
        startIndex

    }

    const loadBooks = () => {
        setStartIndex(startIndex + 30);
        window.scrollTo(0, 0);

    }
    const loadPrevBooks = () => {
        if (startIndex) {
            setStartIndex(startIndex - 30);
            window.scrollTo(0, 0);

        }
    }

    const { data: books, isError, isLoading } = bookAPI.useFetchAllBooksQuery(queryParamsObj);


    const sortedByCategoryBooks = useMemo(() => {
        if (bookSortByCategory) {
            return booksArr?.filter((book: IBook) => {
                return book.volumeInfo?.categories?.join("").toLowerCase().includes(bookSortByCategory);
            })

        } else {
            return booksArr;
        }
    }, [bookSortByCategory, booksArr, searchQuery, bookSortByRelevance])





    useEffect(() => {
        setBooksArr(books?.items);
    }, [books, booksArr, searchQuery, startIndex, bookSortByRelevance])
    return (
        <div className={styles.container}>
            <div>

                {books && <div className={styles.book_amount}>Найдено книг - {books?.totalItems}</div>}
                <div className={styles.book_list}>

                    {sortedByCategoryBooks && sortedByCategoryBooks.map((book: IBook) =>
                        <BookItem
                            id={book.id}
                            key={book.etag}
                            authors={book.volumeInfo?.authors}
                            categories={book.volumeInfo?.categories}
                            title={book.volumeInfo?.title}
                            image={book.volumeInfo?.imageLinks?.smallThumbnail}
                        />
                    )
                    }
                    {isLoading && <Loader />}
                    {isError && !searchQuery && <div>Введите для поиска название книги</div>}
                    {isError && searchQuery && <div>Произошла ошибка. Перезагрузите страницу</div>}
                    {books &&
                        <div>
                            <Button clickMe={loadPrevBooks}>Предыдущая страница</Button>
                            <Button clickMe={loadBooks}>Следующая страница</Button>
                        </div>}

                </div>
            </div>

        </div>

    )
}

export default BooksList;