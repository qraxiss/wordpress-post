import { category as categoryModel } from '../../database/models'
import { category as categoryType } from '../types/category'
import * as validators from '../validators/category'
import { validate } from '../helpers/validator'

import { filter, rename } from '../helpers/filter'

import { ItemExitsError, NotFoundError } from '../../errors/errors'

export async function create(params: any): Promise<categoryType> {
    validate(params, validators.create)

    const categories = await categoryModel.find({ category: params.category })
    if (categories.length > 0) {
        throw new ItemExitsError('Category already exists')
    }

    const result = await categoryModel.create(params)
    const category = rename(filter(result.toObject(), ['__v']), '_id', 'category_id') as categoryType

    return category as categoryType
}

export async function get(params: any): Promise<categoryType | categoryType[]> {
    validate(params, validators.get)

    if (params.category_id) {
        var params = rename(params, 'category_id', '_id')
        let result = await categoryModel.findOne(params, { __v: 0 })

        if (!result) {
            throw new NotFoundError('Category not found')
        }

        return rename(result.toObject(), '_id', 'category_id') as categoryType
    }

    var result = await categoryModel.find(params, { __v: 0 })
    if (result.length === 0) {
        throw new NotFoundError('Category not found')
    }

    var categories = result.map((item) => {
        return rename(item.toObject(), '_id', 'category_id') as categoryType
    }) as categoryType[]

    return categories
}

export async function update(params: any) {
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

    return result
}

export async function remove(params: any) {
    validate(params, validators.remove)

    const result = await categoryModel.findOneAndDelete(rename(params, 'category_id', '_id'))

    if (!result) {
        throw new NotFoundError('Category not found')
    }

    return filter(result.toObject(), ['__v'])
}
