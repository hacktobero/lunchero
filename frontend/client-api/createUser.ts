import { User } from "./getUserById";

export async function createUser(email: string, organisation_id: string, password: string) {
    try {
        const res = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                organisation_id: organisation_id,
                password: password,
            }),
            headers: {'Content-type': 'application/json'},

        });
        const data: User = await res.json()
        return data;
    } catch (error) {
        return error.message;
    }
};
