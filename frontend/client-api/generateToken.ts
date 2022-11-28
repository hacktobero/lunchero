interface Token {
  access_token: string,
  token_type: string
}

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
    
export async function generateToken(username: string, password: string) {
    try {
        const res = await fetch('http://localhost:8000/api/token', {
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
            'Content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
          }
        });
        const token: Token = await res.json();
        return token
      } catch (error: any) {
        return error.message
      }
};