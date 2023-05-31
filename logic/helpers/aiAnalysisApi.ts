import axios from 'axios'
import config from '../../config'

export const api = axios.create({
    baseURL: config.AI_ANALYSIS_API,
    headers: {
        'Content-Type': 'application/json'
    }
})
