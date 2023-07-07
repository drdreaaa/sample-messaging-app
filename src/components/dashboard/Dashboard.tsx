import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const Dashboard: React.FC = () => {
    const { token, userObj } = useAuthContext();

    useEffect(() => {
        console.log(`token (in Dashboard)? \t ${token}`);
        console.log(`userObj: (in Dashboard)? \t ${JSON.stringify(userObj)}`);
    }, [token, userObj]);
    
    return (
        <>
            <h1>{userObj?.name}'s Dashboard</h1>
        </>
    )
}

export default Dashboard;