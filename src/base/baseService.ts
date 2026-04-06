export class BaseServ { 
    protected model: any

    constructor(models: any){
        this.model = models
    }

    async findOneByeEmail(email: any){
        return await this.model.findOne({email})
    }
}