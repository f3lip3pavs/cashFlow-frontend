export const baseURL = 'http://localhost:8080'
const name = "felipe.pavs"
const pass = "1234"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODYwNTAzNmM2NjIxYzY3NTk2Yzg4ZSIsImlhdCI6MTczOTI1MDkxMiwiZXhwIjoxNzM5MjU0NTEyfQ.Pn3wO7XkJ8q4QgXkr4nX73xF0i34Mt6nH1nH20xlKlg"

export async function tokenLogin(name, pass){ // alterar nome para getUserToken

    const header = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify({
            username: name,
            password: pass
        }),
    }

    return fetch(`${baseURL}/login`, header)
    .then(res => {
        return res.json()
    })
    .then(json => {
        return json
    })
}

export async function getUser(token) {

    const header = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    
    return fetch(`${baseURL}/users/user`, header)
    .then(res => res.json())
    .then(json => json)
}

export async function updateUser(data, token){

    const header = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    header.body = JSON.stringify(data)

    return fetch(`${baseURL}/users/`, header)
    .then(res => res.json())
    .then(json => json)
}

export async function createUser(user){

    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    header.body = JSON.stringify(user)

    return fetch(`${baseURL}/users/`, header)
    .then(res => res.json())
    .then(json => json)
}

export async function deleteUser(token){
    
    const header = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    fetch(`${baseURL}/users`, header)
    .then(res => res)
    .then(json => json);
}