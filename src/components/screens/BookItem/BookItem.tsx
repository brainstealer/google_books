import React, { FC } from 'react'
import BookInfo from '../BookInfo/BookInfo';
import styles from './bookItem.module.css'
import BookImage from '../BookImage/BookImage';
import { useNavigate } from 'react-router-dom';

interface IBookItemProps {
    id: string | undefined;
    title: string | undefined;
    image: string | undefined;
    authors: string[] | undefined;
    categories: string[] | undefined;
}



const BookItem: FC<IBookItemProps> = ({ id, title, image, authors, categories }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${id}`)} className={styles.book_item}>

            <BookImage image={image} />
            <BookInfo
                title={title}
                authors={authors}
                categories={categories}
            />
        </div>
    )
}

export default BookItem