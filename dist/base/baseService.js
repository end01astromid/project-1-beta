"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    model;
    constructor(models) {
        this.model = models;
    }
    async findOneByEmail(email) {
        return await this.model.findOne({ email }).exec();
    }
}
exports.BaseService = BaseService;
