// import db from '../configs/db';

const authService = {
    login: async (username: string, password: string) => {
        if (username === 'asdf' && password === 'asdf') {
            console.log(`login success`);
            return { token: 'test123' };
        } else {
            console.log(`login failure`);
            return null;
        }
    }
}

export default authService;