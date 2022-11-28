async function createUser(email, password) {
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
              organisation_id: 1
            }),
        };
        const response = await fetch('http://localhost:8000/api/users', requestOptions );
        const user = await response.json();
        return user;
    } catch (error) {
        return error.message;
    }
};

const res = createUser('email@email12.pl', 'password12344');
console.log(res)