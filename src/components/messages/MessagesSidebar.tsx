import React, { useEffect, useState } from 'react';
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

// Contexts
import useMessagesContext from '../../hooks/useMessagesContext';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import usersService from '../../clientServices/users.service';
import Typography from '@mui/material/Typography';
import contactsService from '../../clientServices/contacts.service';
import useAuthContext from '../../hooks/useAuthContext';
import { IContact } from '../../interfaces/contacts.interface';

const menu = ['directs', 'groups', 'contacts']

const MessagesSidebar: React.FC = () => {
    const { contacts2, directs } = useMessagesContext();
    const { userObj } = useAuthContext();
    const [filter, setFilter] = useState<string>('');
    const [isOpen, setOpen] = useState<boolean>(false);
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [foundUser, setFoundUser] = useState<IContact>();
    const [input, setInput] = useState<string>('');
    const [modalType, setModalType] = useState<string>('');

    useEffect(() => {
        console.log(`contacts2: ${JSON.stringify(contacts2)}`);
        // console.log(`directs: ${JSON.stringify(directs)}`);
    }, [contacts2]);

    const handleOpenModal = (modalType: string) => {
        setModalType(modalType);
        setOpen(true);
    }

    const closeAdd = () => {
        setOpen(false);
    }

    const closeConfirm = () => {
        setConfirmOpen(false);
    }

    const handleFindUser = async () => {
        console.log(`input: ${input}`);
        // find user by input
        const response = await usersService.findUser(input);
        console.log(`[MessagesSidebar.tsx] findUser: ${JSON.stringify(response)}`);
        if (response) {
            console.log(`open confirmation modal`);
            setFoundUser(response as IContact);
            setConfirmOpen(true);
            closeAdd();
        } else {
            console.log(`user not found`);
        }
    }

    const handleCreateThread = async () => {
        console.log('create thread')
    }

    const handleCreateGroup = async () => {
        console.log('create thread')
    }

    const handleAddContact = async () => {
        // insert entry into contacts2 db
        console.log(`adding user`);
        if (userObj && foundUser) {
            console.log(`userObj id: ${userObj.id} \t friend: ${foundUser.friendId}`);
            const response = contactsService.addContact(parseInt(userObj.id), foundUser.friendId);
            console.log(`response: ${JSON.stringify(response)}`);

            // TODO: UPDATE CONTACTS 

        }
        setConfirmOpen(false);
    }

    const menuDetails = (menuItem: string) => {
        switch (menuItem) {
            case 'contacts':
                if (!contacts2.length) {
                    return <React.Fragment>No contacts</React.Fragment>
                } else {
                    return (
                        <React.Fragment>
                            {contacts2?.map((contact) => (
                                <Link key={contact.friendId} to={`/messages/contacts/${contact.friendId}`}>{contact.handle}</Link>
                                // <MenuItem key={contact.friendId}>{contact.handle}</MenuItem>
                                // < key={contact}>{contact}</>
                            ))}
                        </React.Fragment>
                    )
                }
            case 'directs': 
                return (
                    <React.Fragment>
                        <Box id='directMessageThreadLinks' sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        
                        {directs?.map((thread) => (
                            <Link key={thread.threadId} to={`/messages/threads/${thread.threadId}`}>{thread.friendId}</Link>
                            // <MenuItem key={thread.threadId}>{thread.friendId}</MenuItem>
                            ))}
                        </Box>
                    </React.Fragment>
                )
            // case 'groups': 
            default:
                return <Typography>No ${menuItem}s</Typography>

        }
    }

    const modalAction = () => {
        switch (modalType) {
            case 'thread':
                return <Button onClick={handleCreateThread}>Create Thread</Button>
            case 'group':
                return <Button onClick={handleCreateGroup}>Create Thread</Button>
            case 'contact':
                return <Button onClick={handleFindUser}>Find User</Button>
            default:
                'Add'
        }
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
                <Box id='addNew' className='addButtons'>
                    <AddCommentOutlinedIcon onClick={() => handleOpenModal('thread')}/>
                    <PersonAddOutlinedIcon onClick={() => handleOpenModal('contact')}/>
                    <GroupAddOutlinedIcon onClick={() => handleOpenModal('group')}/>
                </Box>
                <TextField label='filter' value={filter} onChange={(e) => setFilter(e.target.value)} />
                {/* {menu.map((item: string) => (
                    <Link key={item} to={`/messages/${item}`}>{item}</Link>
                    ))} */}
                {menu.map((item: string) => (
                    <Accordion key={item}>
                        <AccordionSummary>
                            <Link key={item} to={`/messages/${item}`}>{item}</Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            {menuDetails(item)}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
            <Modal open={isOpen} onClose={closeAdd} className='modal'>
                <Box>
                    {/* <AddModal close={close} addType='addDm' submit={handleAdd}/> */}
                    <TextField label='search for user' value={input} onChange={(e) => setInput(e.target.value)} />
                    <Box id='modalActions'>
                        {modalAction()}
                        <Button onClick={closeAdd}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={confirmOpen} onClose={closeConfirm} className='modal'>
                <Box>
                    <Typography>Found user: {foundUser?.name}</Typography>
                    <Box id='modalActions'>
                        <Button onClick={handleAddContact}>Add Friend</Button>
                        <Button onClick={closeConfirm}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    )
}

export default MessagesSidebar;