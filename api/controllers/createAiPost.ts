import { ahandler } from '../../errors/handle'
import * as logic from '../../logic/models/createAiPost'

export class Post {
    @ahandler
    static async create(req: any, res: any, next: any) {
        return res.json(await logic.create(req.body))
    }
}
