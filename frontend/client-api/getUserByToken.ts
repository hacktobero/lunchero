import { User } from "./getUserById";
export async function getUserByToken(token: string) {
    try {
        const res = await fetch('http://localhost:8000/api/users/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const userInfo: User = await res.json();
        return userInfo
    } catch (error) {
        return error.message
    }
   
};