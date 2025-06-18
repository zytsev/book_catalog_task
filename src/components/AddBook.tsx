import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import type { Book } from './BookItem';

interface AddBookDialogProps {
    handleClose: () => void;
    open: boolean;
    addBook: (newBook: Book) => void;
}

export default function AddBook({ handleClose, open, addBook }: AddBookDialogProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as FormData).entries());
        const newBook: Book = {
            id: Date.now(),
            title: String(formJson.title),
            author: String(formJson.author),
            description: String(formJson.description),
            image: String(formJson.image),
        };
        addBook(newBook);
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
                paper: {
                    component: 'form',
                    onSubmit: handleSubmit,
                },
            }}
        >
            <DialogTitle>New Book</DialogTitle>
            <DialogContent>
                <DialogContentText>Fill in the following fields</DialogContentText>
                <TextField autoFocus required margin='dense' id='title' name='title' label='Title' type='text' fullWidth variant='standard' />
                <TextField required margin='dense' id='author' name='author' label='Author' type='text' fullWidth variant='standard' />
                <TextField required margin='dense' id='description' name='description' label='Description' type='text' fullWidth variant='standard' />
                <TextField margin='dense' id='image' name='image' label='Link to cover image' type='url' fullWidth variant='standard' />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit'>Save book</Button>
            </DialogActions>
        </Dialog>
    );
}
