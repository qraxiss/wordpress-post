import * as Joi from 'joi'
import { joiObjectId } from 'ts-joi-objectid'

const objectId = joiObjectId(Joi)

export const create = Joi.object({
    tags: Joi.array().items(Joi.string()),
    category: Joi.string(),
    img: Joi.string(),

    content: Joi.string().required(),
    title: Joi.string().required()
})
