import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// MUI Icons
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

// App Components
import AddModal from './AddModal';

// Styles
import './Modal.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const menu = ['directs', 'groups', 'contacts']

const MessagesSidebar: React.FC = () => {
    const [filter, setFilter] = useState<string>('');
    const [isOpen, setOpen] = useState<boolean>(false);

    const close = () => {
        setOpen(false);
    }

    const handleAdd = () => {
        console.log('adding something');
    }

    return (
        <Container id='msgSidebar'>
            <Box id='sidebarMenu'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'start'
                }}
            >
                <Box>
                    <AddCommentOutlinedIcon onClick={() => setOpen(!isOpen)}/>
                    <PersonAddOutlinedIcon />
                    <GroupAddOutlinedIcon />
                </Box>
                <TextField label='filter' value={filter} onChange={(e) => setFilter(e.target.value)} />
                {/* {menu.map((item: string) => (
                    <Link key={item} to={`/messages/${item}`}>{item}</Link>
                    ))} */}
                {menu.map((item: string) => (
                    <Accordion>
                        <AccordionSummary>
                                <Link key={item} to={`/messages/${item}`}>{item}</Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            <>list of contacts</>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
            <Modal open={isOpen} onClose={close} className='modal'>
                <AddModal close={close} addType='addDm' submit={handleAdd}/>
            </Modal>
        </Container>
    )
}

export default MessagesSidebar;