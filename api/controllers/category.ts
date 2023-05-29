import { ahandler } from '../../errors/handle'
import * as logic from '../../logic/models/category'

export class Category {
    @ahandler
    static async create(req: any, res: any, next: any) {
        return res.json(await logic.create(req.body))
    }

    @ahandler
    static async get(req: any, res: any, next: any) {
        return res.json(await logic.get(req.body))
    }

    @ahandler
    static async update(req: any, res: any, next: any) {
        return res.json(await logic.update(req.body))
    }

    @ahandler
    static async remove(req: any, res: any, next: any) {
        return res.json(await logic.remove(req.body))
    }
}
