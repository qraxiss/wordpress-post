import { category, category as categoryModel } from '../../database/models'
import { category as categoryType } from '../types/category'
import * as validators from '../validators/category'
import { validate } from '../helpers/validator'

import { filter, rename } from '../helpers/filter'

import { ItemExitsError, NotFoundError } from '../../errors/errors'

function formatObject(item: any, reverse: boolean = false): categoryType {
    item = filter(item, ['__v'])

    if (!reverse) {
        item = rename(item, '_id', 'category_id') as categoryType
    } else {
        item = rename(item, 'category_id', '_id') as categoryType
    }

    return item
}

export async function create(params: any): Promise<categoryType> {
    validate(params, validators.create)

    const categories = await categoryModel.find({ category: params.category })
    if (categories.length > 0) {
        throw new ItemExitsError('Category already exists')
    }

    const result = await categoryModel.create(params)
    const category = formatObject(result.toObject())

    return category
}

export async function get(params: any): Promise<categoryType | categoryType[]> {
    validate(params, validators.get)

    if (params.category_id) {
        params = formatObject(params, true)
        let result = await categoryModel.findOne(params, { __v: 0 })

        if (!result) {
            throw new NotFoundError('Category not found')
        }

        return formatObject(result.toObject())
    }

    var result = await categoryModel.find(params, { __v: 0 })
    if (result.length === 0) {
        throw new NotFoundError('Category not found')
    }

    var categories = result.map((item) => {
        return formatObject(item.toObject())
    })

    return categories
}

export async function update(params: any): Promise<categoryType> {
    validate(params, validators.update)

    const result = await categoryModel.findOneAndUpdate(
        {
            _id: params.category_id
        },
        filter(params, ['category_id']),
        { new: true }
    )

    if (!result) {
        throw new NotFoundError('Category not found')
    }

    return formatObject(result.toObject())
}

export async function remove(params: any): Promise<categoryType> {
    validate(params, validators.remove)

    const result = await categoryModel.findOneAndDelete(formatObject(params, true))

    if (!result) {
        throw new NotFoundError('Category not found')
    }

    return formatObject(result.toObject())
}
