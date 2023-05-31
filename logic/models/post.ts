import { category as categoryModel } from '../../database/models'
import { post as postType } from '../types/post'

import * as validators from '../validators/post'
import { validate } from '../helpers/validator'

import { filter, rename } from '../helpers/filter'

import { ItemExitsError, NotFoundError } from '../../errors/errors'

import { api as wordpressApi } from '../helpers/wordpress'

import { AxiosResponse } from 'axios'

export async function create(params: any) {
    validate(params, validators.create)
}
