import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import books from '../assets/books.json';
import { Box, ListItemButton, TextField } from '@mui/material';
import { useState } from 'react';

export default function BookList() {
    const [search, setSearch] = useState('');
    const filteredBooks = books.filter(
        (book) => book.author.toLowerCase().includes(search.toLowerCase()) || book.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <Box component='form' sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete='off'>
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
                {filteredBooks.map((el) => (
                    <ListItemButton key={el.id}>
                        <ListItemAvatar>
                            <Avatar src={el.image ?? ''} alt={el.title + ' book_logo'} />
                        </ListItemAvatar>
                        <ListItemText primary={el.author} secondary={el.title} />
                    </ListItemButton>
                ))}
            </List>
        </>
    );
}
