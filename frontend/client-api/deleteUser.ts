export async function deleteUser(id: number) {
    const res = await fetch(`http://localhost:8000/api/users/delete_user/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLnBsIiwib3JnYW5pc2F0aW9uX2lkIjoiMSIsImlkIjo1fQ.9SWWFLo971pWRF5aH1AREC_Cyogp7WQtnjDsqMtuMdQ'
        }
    });
    const data = await res.json();
    return data;
}; 