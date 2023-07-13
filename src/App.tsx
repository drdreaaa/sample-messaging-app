import { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Styles
import './App.css'

// MUI Components
import Container from '@mui/material/Container';

// App Components
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Messages from './components/messages/Messages';
import NavBar from './layout/NavBar';
import Preferences from './components/preferences/Preferences';

// Hooks
import useAuthContext from './hooks/useAuthContext';
import Directs from './components/messages/Directs';
import Groups from './components/messages/Groups';
import Contacts from './components/messages/Contacts';
import MessagesDashboard from './components/messages/MessagesDashboard';
import MessagesProvider from './contexts/MessagesProvider';
import Thread from './components/messages/Thread';
import Register from './components/login/Register';
import Contact from './components/messages/Contact';

// Loaders
// import { loader as contactsLoader }  from './components/messages/Messages';

function App() {
  const navigate = useNavigate();
  const { token, userObj } = useAuthContext();
  // console.log(`[App.tsx] token: ${JSON.stringify(token)}`);


  useEffect(() => {
    // console.log(`[App.tsx] userObj: ${JSON.stringify(userObj)}`);
    if (!userObj) {
      navigate('/login');
    }
    
  }, [userObj]);
  // }, [token, userObj, navigate]);

  // if (!userObj) return <Login />

  return (
    <MessagesProvider>

      <Container id='appContainer' className='wrapper'>
        {/* <h1>Main Application</h1> */}
        {userObj ? <NavBar /> : <></>}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />            
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/messages" element={<Messages />}>
              <Route index element={<MessagesDashboard />} />
              <Route path='directs' element={<Directs />}/>
              <Route path='groups' element={<Groups />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='threads/:id' element={<Thread />} />
              <Route path='contacts/:id' element={<Contact />} />
              {/* loader={contactsLoader}/> */}
          </Route>
        </Routes>
      </Container>
    </MessagesProvider>
  )
}

export default App;


/* 
  // const { token, setToken, clearToken } = useToken();
  const { user } = useAuth();
  const { addUser } = useUser();
  const { getItem } = useLocalStorage();

  // if (!user) navigate('/login');

  useEffect(() => {
    console.log(`[App.tsx] user: ${JSON.stringify(user)}`);
    // const token = getItem('token');
    // console.log(`[App.tsx] getItem('token'): ${JSON.stringify(token)}`);
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  // if (!user) return <Login />

  // useEffect(() => {
  //   const token = getItem('token');
  //   console.log(`[App.tsx] token??? ${token}`);
  //   if (getItem('token')) {
  //     console.log(`token exists: ${getItem('token')}`);
  //   }
  // }, [getItem]);

  // useEffect(() => {
  //   console.log(`[App.tsx] token: ${token}`);
  //   if (!token) {
  //     console.log(`[App.tsx] token in if: ${token}`);
  //     navigate('/login');
  //   } 
  //   // else {
  //   //   navigate('/dashboard');
  //   // }
  // }, [token, navigate]);

  // const handleToken = (token: string) => {
  //   console.log(`[App.tsx] handle token: ${token}`);
  //   if (!token) {
  //     clearToken();
  //     navigate('/login');
  //   } else {
  //     setToken(token);
  //     navigate('/dashboard');
  //   }
  // }
*/