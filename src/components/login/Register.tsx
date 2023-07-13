import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import useAuth from '../../hooks/useAuth';

// TODOs
// TODO: add form validation
// TODO: if email exists, prompt user to login
// TODO: if handle exists, prompt to choose a different handle


const Register: React.FC = () => {
    // context variables and functions
    const { register } = useAuth();
    const navigate = useNavigate();

    // local state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [handle, setHandle] = useState('');

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const response = await register(email, password, first, last, handle);
        console.log(`[Register.tsx] register response: ${response}`);
        if (response) {
            console.log(`[Register.tsx] want to direct user to add new contacts or start thread`);
            navigate('/messages');
        } else {
            alert('register failure');
        }
    }


    return (
        <div className="register-wrapper">
            <h1>Register</h1>
            <form>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setHandle(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    <p>First Name</p>
                    <input type="text" onChange={e => setFirst(e.target.value)}/>
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" onChange={e => setLast(e.target.value)}/>
                </label>
                <div>
                {/* <button type="submit" onClick={e => handleSubmit(e)}>Submit</button> */}
                <button type="submit" onClick={e => handleRegister(e)}>Register</button>
                </div>
            </form>
            <div>Already have an account? Login <Link to={'/login'}>here</Link></div>
        </div>
    )
}

export default Register;