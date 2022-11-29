interface Token {
  access_token: string,
  token_type: string
}

export async function generateToken(email: string, password: string) {
    try {
        const res = await fetch('http://localhost:8000/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                grant_type: '',
                username: email,
                password: password,
                scope: '',
                client_id: '',
                client_secret: ''
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
       const data: Token = await res.json();
       return data.access_token;
    } catch (error) {
        return error.message
    }
  }