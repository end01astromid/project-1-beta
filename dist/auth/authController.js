"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authService_1 = require("./authService");
class AuthController {
    async register(req, res) {
        try {
            const user = await authService_1.authService.register(req.body);
            res.status(201).json({
                message: "Пользователь успешно создан",
                user: { id: user._id, email: user.email }
            });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async login(req, res) {
        try {
            const result = await authService_1.authService.login(req.body);
            res.json(result);
        }
        catch (e) {
            res.status(401).json({ error: e.message });
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map