export async function generateToken() {
    const res = await fetch('http:localhost:8000/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant-type': '',
            'username': 'email@email.pl',
            'password': 'password1234',
            'scope': 'scope',
            'client_id': '',
            'client_secret': ''
        })
    });
   const data = await res.json();
   return data;
};