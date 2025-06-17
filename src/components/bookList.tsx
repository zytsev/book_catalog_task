import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import books from '../assets/books.json';
import { ListItemButton } from '@mui/material';

export default function BookList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {books.map((el) => (
                <ListItemButton key={el.id}>
                    <ListItemAvatar>
                        <Avatar src={el.image} alt={el.title + ' book_logo'} />
                    </ListItemAvatar>
                    <ListItemText primary={el.author} secondary={el.title} />
                </ListItemButton>
            ))}
        </List>
    );
}
