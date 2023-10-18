import React, { FC } from 'react';
import styles from './bookImage.module.css';
import book from '../../../assets/bookBlank/book_blank.png';


interface IBookImageProps {
    image: string | undefined;
}

const BookImage: FC<IBookImageProps> = ({ image }) => {
    return (
        <div className={styles.container}>
            {image ? <img src={image} alt="j" /> : <img src={book} alt='' />}
        </div>
    )
}

export default BookImage