export async function deleteUser(id: number, token: string) {
    try {
        const res = await fetch(`http://localhost:8000/api/users/delete_user/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        return error.message
    }
   
}; 