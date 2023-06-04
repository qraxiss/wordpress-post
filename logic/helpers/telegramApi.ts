import axios from 'axios'
import config from '../../config'

export const api = axios.create({
    baseURL: config.TELEGRAM_API,
    headers: {
        Authorization: `Bearer 123`,
        'Content-Type': 'application/json'
    }
})

export async function sendMessage(message: string) {
    return api.post('send-message', {
        text: message
    })
}
