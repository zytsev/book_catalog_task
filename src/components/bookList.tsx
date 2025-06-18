import List from '@mui/material/List';
import initialBooks from '../assets/books.json';
import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import AddBook from './AddBook';
import BookItem, { type Book } from './BookItem';

export default function BookList() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [books, setBooks] = useState<Book[]>(() => {
        const saved = localStorage.getItem('library');
        return saved ? JSON.parse(saved) : initialBooks;
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addBook = (newBook: Book) => {
        setBooks((prev) => [newBook, ...prev]);
    };

    const filteredBooks = useMemo(() => {
        return books.filter((book) => book.author.toLowerCase().includes(search.toLowerCase()) || book.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, books]);

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(books));
    }, [books]);

    return (
        <Box sx={{ width: 360, scrollbarGutter: 'stable' }}>
            <Box component='form' sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete='off'>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Add book
                </Button>
                <TextField
                    fullWidth
                    label='Search by author or title'
                    variant='outlined'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ mb: 2 }}
                />
            </Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {filteredBooks.length === 0 ? (
                    <Typography variant='body2'>No books found.</Typography>
                ) : (
                    filteredBooks.map((el) => <BookItem key={el.id} book={el} />)
                )}
            </List>
            <AddBook handleClose={handleClose} open={open} addBook={addBook} />
        </Box>
    );
}
