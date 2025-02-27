export const baseURL = 'https://cashflow-sr12.onrender.com'//'http://localhost:8080'

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