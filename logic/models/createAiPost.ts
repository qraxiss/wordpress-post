import * as categoryModel from './category'

import { post as postType } from '../types/createAiPost'
import { category as categoryType } from '../types/category'
import { identify as identifyType } from '../types/aiAnalysis'

import * as validators from '../validators/createAiPost'
import { validate } from '../helpers/validator'

import { api as wordpressApi } from '../helpers/wordpressApi'
import { getAiResponse } from '../helpers/aiAnalysisApi'

export async function create(params: any) {
    const value = validate(params, validators.create) as postType

    // Have the artificial intelligence print the same news with different words again.
    // const aiRegeneratedContent = (
    //     await getAiResponse({
    //         report: value.content,
    //         key: 'regenerate',
    //         tempature: 1
    //     })
    // ).content as string

    // const categories = (await categoryModel.get({})) as categoryType[]

    // const category_names = categories.map((item) => {
    //     return item.category
    // })

    // // Identify categories & get hastags
    // const information = (
    //     await getAiResponse({
    //         report: value.content,
    //         key: 'identify',
    //         tempature: 1,
    //         json_parse: true
    //     })
    // ).content as identifyType

    return (
        await wordpressApi.post('/posts', {
            title: value.title,
            content: value.content,
            status: 'publish',
            categories: ['a'],
            tags: ['a']
        })
    ).data
}

export async function get(params: any) {
    return (await wordpressApi.get('/tags')).data
}
