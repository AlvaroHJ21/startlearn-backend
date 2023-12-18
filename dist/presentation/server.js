"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = require("./middlewares/error-handler");
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port, routes } = options;
        this.port = port || 3000;
        this.routes = routes;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // Middlewares
            this.app.use(express_1.default.json()); //row json
            this.app.use(express_1.default.urlencoded({ extended: true })); //urlencoded is for forms
            this.app.use((0, morgan_1.default)('dev'));
            this.app.use((0, cors_1.default)());
            this.app.use(this.routes);
            this.app.use(error_handler_1.ErrorHandler.handleError);
            this.app.listen(this.port, () => {
                console.log(`Server listening on port ${this.port}`);
            });
        });
    }
}
exports.Server = Server;