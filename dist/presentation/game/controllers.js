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
exports.GameController = void 0;
const prisma_1 = __importDefault(require("@/lib/prisma"));
class GameController {
    findAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const records = yield prisma_1.default.records.findMany({
                    orderBy: {
                        score: 'desc',
                    },
                });
                res.json({
                    ok: true,
                    data: records,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    store(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, score } = req.body;
                const record = yield prisma_1.default.records.create({
                    data: {
                        name,
                        score,
                    },
                });
                res.json({
                    ok: true,
                    data: record,
                    message: 'Record created successfully',
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.GameController = GameController;
