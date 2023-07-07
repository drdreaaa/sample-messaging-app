import { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Styles
import './App.css'

// MUI Components
import Container from '@mui/material/Container';

// App Components
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import NavBar from './layout/NavBar';
import Preferences from './components/preferences/Preferences';

// Hooks
import useAuthContext from './hooks/useAuthContext';

function App() {
  const navigate = useNavigate();
  const { token, userObj } = useAuthContext();

  useEffect(() => {
    // console.log(`[App.tsx] user: ${JSON.stringify(user)}`);
    console.log(`[App.tsx] userObj: ${JSON.stringify(userObj)}`);
    console.log(`[App.tsx] token: ${JSON.stringify(token)}`);
    // if (!userObj && !token) {
    if (!userObj) {
    // if (!token) {
      navigate('/login');
    }
  }, [token, userObj, navigate]);

  if (!token) return <Login />

  return (
      <Container id='appContainer' className='wrapper'>
        <h1>Main Application</h1>
        {userObj ? <NavBar /> : <></>}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />            
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Container>
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