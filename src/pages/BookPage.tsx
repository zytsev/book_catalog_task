import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import type { Book } from '../components/BookItem';

export default function BookPage() {
    const { id } = useParams();
    const booksJson = localStorage.getItem('library');
    let books: Book[] = [];
    try {
        if (booksJson) {
            books = JSON.parse(booksJson);
        }
    } catch (error) {
        console.error(error);
    }

    const book = books.find((el) => el.id === Number(id));

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ width: '100%', paddingTop: '100%', backgroundSize: 'contain', backgroundPosition: 'center' }} image={book?.image} title='Book' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {book?.author}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                    {book?.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {book?.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/`} size='small'>
                    Home
                </Button>
            </CardActions>
        </Card>
    );
}
