import client from './client'

export async function createContact(data) {
    const response = await client.post('/address', {
        data
    })
    return response.data
}

