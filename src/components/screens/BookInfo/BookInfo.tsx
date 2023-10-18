import React, { FC } from 'react';
import styles from './bookInfo.module.css'

interface IBookInfoProps {
    title: string | undefined;
    categories: string[] | undefined;
    authors: string[] | undefined;
}

const BookInfo: FC<IBookInfoProps> = ({ title, categories, authors }) => {
    return (
        <div className={styles.container}>
            {categories ? <h2 className={styles.book_title_2}>{categories}</h2> : <h2 className={styles.book_title_2}>Без категории</h2>}
            <h1 className={styles.book_title}>
                {title}
            </h1>
            <h2 className={styles.book_title_2}>{authors}</h2>
        </div>
    )
}

export default BookInfo;