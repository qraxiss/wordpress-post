import * as Joi from 'joi'
import { joiObjectId } from 'ts-joi-objectid'

export const create = Joi.object({
    content: Joi.string().required(),
    title: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    category: Joi.string(),
    img: Joi.string()
})
