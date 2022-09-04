import client from './client'

export async function createAddress(data) {
    const response = await client.post('/addresses', data)
    return response
}

