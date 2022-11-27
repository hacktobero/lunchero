import  Axios  from "axios";

export async function getUserByToken(token: string) {
    try {
        const userInfo = await Axios.get('http://localhost:8000/api/users/me', {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        return userInfo;
    } catch (error) {
        return error.message
    }
   
};