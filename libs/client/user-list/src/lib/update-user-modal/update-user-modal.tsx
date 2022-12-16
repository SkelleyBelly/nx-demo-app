import { ChangeEvent, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUpdateUserMutation } from './queries.generated'
import { TextField } from '@mui/material';

interface UpdateUserModalProps {
    userId: string;
    userName: string;
    onClose: () => void;
    onComplete: () => void;
}

export const UpdateUserModal = ({ userId, userName, onClose, onComplete }: UpdateUserModalProps) => {
    const [inputValue, setInputValue] = useState<string>(userName);

    const [updateUser, { loading }] = useUpdateUserMutation({
        onError: alert,
        onCompleted: onComplete,
        variables: {
            where: {
                id: userId,
            },
            data: {
                name: {
                    set: inputValue
                }
            }
        }
    })

    const onSubmit = () => {
        updateUser()
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <Dialog
            open
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Update user?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <TextField value={inputValue} onChange={handleInputChange} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Disagree</Button>
                <Button onClick={onSubmit} autoFocus disabled={loading}>
                    {loading ? "Updating" : "Agree"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}