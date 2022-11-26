export async function generateToken(username: string, password: string) {
    try {
        const res = await fetch('http:localhost:8000/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                grant_type: '',
                username: username,
                password: password,
                scope: '',
                client_id: '',
                client_secret: ''
            }),
            headers: {
                'accept': 'application/json'
            }
        });
       const data = await res.json();
       return data;
    } catch (error) {
        return error.message
    }
    
};