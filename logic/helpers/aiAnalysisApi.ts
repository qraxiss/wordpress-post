import axios from 'axios'
import config from '../../config'

import { openai_question, openai_response } from '../types/aiAnalysis'

export const api = axios.create({
    baseURL: config.AI_ANALYSIS_API,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function getAiResponse(report: openai_question): Promise<openai_response> {
    const response = await api.get('/openai', {
        data: report
    })

    return response.data as openai_response
}
