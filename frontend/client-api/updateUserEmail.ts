export async function updateUserEmail (user_id: number, new_email: string, token: string ) {
    try {       
        const res = await fetch(`http://localhost:8000/api/users/update_user_email/${user_id}?new_email=${new_email}`, {
          method: 'GET',
          headers: {Authorization: `Bearer ${token}`, accept: 'application/json' }
        });
        const data = await res.json();
        return data
    } catch (error) {
        return error.message;
    }
};
