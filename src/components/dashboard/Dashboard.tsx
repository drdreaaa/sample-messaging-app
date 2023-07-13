import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import useMessagesContext from '../../hooks/useMessagesContext';

const Dashboard: React.FC = () => {
    const { userObj } = useAuthContext();
    const { fetchContacts } = useMessagesContext();

    // useEffect(() => {
    //     console.log(`[Dashboard.tsx] FETCH CONTACTS`);
    //     fetchContacts(parseInt(userObj!.id))
    // }, [userObj]);
    
    return (
        <>
            <h1>{userObj?.name}'s Dashboard</h1>
        </>
    )
}

export default Dashboard;