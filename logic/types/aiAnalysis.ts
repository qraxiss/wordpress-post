type openai_question = {
    report: string
    key: string
    tempature?: number // default 0.5
    json_parse?: boolean
}

type openai_response = {
    role: string
    content: string | identify
}

type identify = {
    categories: string[]
    tags: string[]
}

export type { openai_question, openai_response, identify }
