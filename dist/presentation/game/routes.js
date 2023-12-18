"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers");
class GameRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controllers_1.GameController();
        router.get('/', controller.findAll);
        router.post('/', controller.store);
        return router;
    }
}
exports.GameRoutes = GameRoutes;
