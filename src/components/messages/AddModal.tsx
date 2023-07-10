import React, { useState } from 'react';

// MUI Components
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

// Styles
import './Modal.css';
import Box from '@mui/material/Box';

interface AddModalProps {
    addType: string,
    close: () => void,
    submit: () => void,
}

const AddModal: React.FC<AddModalProps> = ({addType, close, submit}) => {
    const [input, setInput] = useState<string>('');
    
    return (
        <Container id='addModal' className='addModal'>
            <h2>Add New {addType}</h2>
            <TextField label='search for user' value={input} onChange={(e) => setInput(e.target.value)} />
            <Select>
                <MenuItem>user 1</MenuItem>
                <MenuItem>user 2</MenuItem>
                <MenuItem>user 3</MenuItem>
                <MenuItem>user 4</MenuItem>
            </Select>
            <Box id='modalActions'>
                <Button onClick={submit}>Add</Button>
                <Button onClick={close}>Cancel</Button>
            </Box>
        </Container>
    )
}

export default AddModal;