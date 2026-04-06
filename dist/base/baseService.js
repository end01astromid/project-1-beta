"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseServ = void 0;
class BaseServ {
    model;
    constructor(models) {
        this.model = models;
    }
    async findOneByeEmail(email) {
        return await this.model.findOne({ email });
    }
}
exports.BaseServ = BaseServ;
//# sourceMappingURL=baseService.js.map