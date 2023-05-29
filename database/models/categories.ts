import { Schema, model } from 'mongoose'

const schema = {
    tags: {
        type: Array
    },

    category: {
        type: String
    },

    img: {
        type: String
    }
}

const categorySchema = new Schema(schema)

export const category = model('category', categorySchema)
