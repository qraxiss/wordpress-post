import { BaseError } from "./errors"
import type { error } from "./types"


export function toJson(err: BaseError | Error) {

    const json : error = {
        message: err.message,
        name: err.name,
        status: 500
    }

    if (err instanceof BaseError){
        json.detail = err.detail
        json.status = err.status
    }

    return json
}