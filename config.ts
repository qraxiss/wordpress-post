import * as dotenv from 'dotenv'

dotenv.config()

type config = {
    PORT: number
    MONGO_CONNECTION: string
    JWT_SECRET: string
    SESSION_SECRET: string

    //wordpress config
    USERNAME: string
    PASSWORD: string
    API_GATE: string

    // https://github.com/stocksensai/ai-analysis
    AI_ANALYSIS_API: string
}

const env = process.env as any

const variables: config = {
    PORT: env.PORT,
    MONGO_CONNECTION: env.MONGO_CONNECTION,
    JWT_SECRET: env.JWT_SECRET,
    SESSION_SECRET: env.SESSION_SECRET,

    USERNAME: env.USERNAME,
    PASSWORD: env.PASSWORD,
    API_GATE: env.API_GATE,

    AI_ANALYSIS_API: env.AI_ANALYSIS_API
}

export default variables
