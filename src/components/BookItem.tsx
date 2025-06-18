import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image?: string;
}

export default function BookItem({ book }: { book: Book }) {
    const { id, title, author, image } = book;
    return (
        <ListItemButton component={Link} to={`book/${id}`}>
            <ListItemAvatar>
                <Avatar src={image ?? ''} alt={title + ' book_logo'} variant='rounded' />
            </ListItemAvatar>
            <ListItemText primary={author} secondary={title} />
        </ListItemButton>
    );
}
