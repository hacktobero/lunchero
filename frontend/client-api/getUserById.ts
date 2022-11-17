interface User {
    email: string,
    organisation_id: string,
    id: number
}

export async function getUserById(id: number) {
    const res = await fetch(`http://localhost:8000/api/users/${id}`);
    const data: User = await res.json();

    return data;
}