import * as Joi from 'joi'
import { joiObjectId } from 'ts-joi-objectid'

const objectId = joiObjectId(Joi)

export const create = Joi.object({
    tags: Joi.array().items(Joi.string()),
    category: Joi.string().required(),
    img: Joi.string()
})

export const update = Joi.object({
    category_id: objectId().required(),

    category: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    img: Joi.string()
}).or('tags', 'category', 'img')

export const remove = Joi.object({
    category_id: objectId().required()
})

export const get = Joi.object({
    category_id: objectId(),
    category: Joi.string()
}).nand('category_id', 'category')
