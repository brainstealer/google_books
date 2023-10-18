import { useContext, useState } from 'react'
import Select from '../ui/Select/Select';
import styles from './bookHeader.module.css'
import { BookSortContext } from '../../store/BookSortContext';
import Input from '../ui/Input/Input';
import Button from '../ui/button/Button';

const BookHeader = () => {

    const { bookSortByCategory, setBookSortByCategory, searchQuery, setSearchQuery, setBookSortByRelevance } = useContext<any>(BookSortContext);
    const [searchInput, setSearchInput] = useState<string>('');


    const sortedBooks = (sort: string) => {
        setBookSortByCategory(sort)
    }

    const searchBooks = (searchInput: string) => {
        setSearchInput(searchInput)
    }

    const sortByRelevance = (sort: string) => {
        setBookSortByRelevance(sort)
    }

    const searchQueryInput = (searchInput: string) => {
        setSearchQuery(searchInput);
    }

    return (
        <div className={styles.header}>
            <div className={styles.input_container}>
                <Input keyEnter={() => searchQueryInput(searchInput)} value={searchInput} getInputValue={searchBooks} />
                <Button clickMe={() => searchQueryInput(searchInput)}>
                    Поиск
                </Button>
            </div>
            <div className={styles.select_container}>
                <Select
                    options={[
                        { name: 'Все', value: '' },
                        { name: 'Арт', value: 'art' },
                        { name: 'Биография', value: 'biography' },
                        { name: 'Компьютеры', value: 'computers' },
                        { name: 'История', value: 'history' },
                        { name: 'Медицина', value: 'medical' },
                        { name: 'Поэзия', value: 'poetry' },
                    ]}
                    getValue={sortedBooks}
                />
                <Select
                    // defaultValue={selectedValue}
                    // value={selectedValue}
                    options={[
                        { name: 'По релевантности', value: 'relevance' },
                        { name: 'По новизне', value: 'newest' },
                    ]}
                    getValue={sortByRelevance}
                />
            </div>

        </div>
    )
}

export default BookHeader;