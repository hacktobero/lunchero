export interface User {
    email: string,
    organisation_id: number,
    id: number
}

export async function getUserById(id: number) {
    try {
        const res = await fetch(`http://localhost:8000/api/users/${id}`);
        const data: User = await res.json();

        return data;
    } catch (e) {
        console.log(e.message)
    }

}
