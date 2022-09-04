import client from './client'

export async function getContacts(params = {}) {
    const response = await client.get('/contacts', {
        params
    })
    return response
}

export async function getContact(id) {
    const response = await client.get('/contacts/' + id)
    return response
}

export async function createContact(data) {
    const response = await client.post('/contacts', data)
    return response
}

