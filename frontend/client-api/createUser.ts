import { User } from "./getUserById";

export async function createUser(email: string, password: string, organisation_id: string) {
    const res = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            organisation_id,
            password
        })
       
    });
    const data: User = await res.json();

    return data;
};