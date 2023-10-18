import React from 'react'
import Loader from '../ui/loader/Loader';
import { bookAPI } from '../../services/BookService';
import { useNavigate, useParams } from 'react-router-dom';
import BookImage from '../screens/BookImage/BookImage';
import styles from './bookCard.module.css'

const BookCard = () => {
    const params = useParams<any>();
    const { data: book, isError, isLoading } = bookAPI.useFetchIdBookQuery(params.id);
    const navigate = useNavigate();

    return (
        <div>
            {isLoading && <Loader />}
            {isError && <h1>Ошибка загрузки книги</h1>}
            {book &&
                <div className={styles.container}>
                    <div className={styles.book_card}>
                        <BookImage image={book.volumeInfo?.imageLinks?.smallThumbnail} />
                        <div className={styles.book_card_info}>
                            <div className={styles.book_card_info_title_1}>{book.volumeInfo?.title}</div>
                            <div className={styles.book_card_info_title_2}>{book.volumeInfo?.authors}</div>
                            <div className={styles.book_card_info_description}>{book.volumeInfo?.description?.replace(/<\/?[a-zA-Z]+>/gi, '')}</div>

                        </div>
                        <button className={styles.book_card_button} onClick={() => navigate('/')}>back</button>

                    </div>
                </div>

            }
        </div>
    )
}

export default BookCard;