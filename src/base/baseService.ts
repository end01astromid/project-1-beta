import { Model, Document} from 'mongoose'

export class BaseService <T extends Document> {
    protected model: Model<T>

    constructor(models: Model<T>){
        this.model = models
    }

    async findOneByEmail(email: string){
        return await this.model.findOne({email}).exec()
    }
}