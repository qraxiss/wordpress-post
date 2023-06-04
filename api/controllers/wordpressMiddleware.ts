import { ahandler } from '../../errors/handle'
import { api as wordpressApi } from '../../logic/helpers/wordpressApi'

import { Request, Response, NextFunction } from 'express'

export class Wordpress {
    @ahandler
    static async all(req: Request, res: Response, next: NextFunction) {
        res.json(
            (
                await wordpressApi({
                    method: req.method,
                    url: req.path,
                    data: req.body
                })
            ).data
        )
    }
}
