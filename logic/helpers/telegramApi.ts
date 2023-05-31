import axios from 'axios'
import config from '../../config'

export const api = axios.create({
    baseURL: config.TELEGRAM_API,
    headers: {
        'Content-Type': 'application/json'
    }
})
