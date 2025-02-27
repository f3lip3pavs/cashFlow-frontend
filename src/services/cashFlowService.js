const baseURL = 'https://cashflow-sr12.onrender.com' //'http://localhost:8080'

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