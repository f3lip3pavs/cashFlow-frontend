const baseURL = 'http://localhost:8080'
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODYwNTAzNmM2NjIxYzY3NTk2Yzg4ZSIsImlhdCI6MTczOTQwMDYxNiwiZXhwIjoxNzM5NDA0MjE2fQ.hSUounTolYdNNQ8QZdgz1ZgnAOxoyTtirQqv5gzfgHI"
const datas = {
    title: "goiaba",
    tag: "2012",
    value: "1",
    cashInflow: "false",
    cashOutflow: "",
    date: "2025-01-20T00:00:00.000Z",
    description: "não sei se eu pego o onibus ou se compro a goiaba"
}

export async function getCashflow(token, UrlOptions) {
    
    const header = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`${baseURL}${UrlOptions}`, header)
    .then(res => res.json())
    .then(json => json)
}

export function setCashFlow(token, data){



    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            title: data.title,
            tag: data.tag,
            value: data.value,
            cashInflow: data.mov == "in" ? "true" : "false",
            cashOutflow: data.mov == "out" ? "true" : "false",
            date: data.date,
            description: data.description,
        })
    }

    return fetch(`${baseURL}/cashFlow/`, header)
    .then(res => res.json())
    .then(json => console.log(json))
}

export async function deleteCard(token, cardId){

    const header = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`${baseURL}/cashFlow/${cardId}`, header)
    .then(res => res.json())
    .then(json => json)
}

export async function updateCard(cardID, token, body) {

    const header = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    header.body = JSON.stringify(body);

    fetch(`${baseURL}/cashFlow/${cardID}`, header)
    .then(res => res.json())
    .then(json => json)
}