"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const client_1 = require("@prisma/client");
class ErrorHandler {
}
exports.ErrorHandler = ErrorHandler;
ErrorHandler.handleError = (error, req, res, next) => {
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({ ok: false, errors: [error.name] });
    }
    if (error) {
        console.log(error);
        return res.status(500).json({ ok: false, errors: ['Internal server error'] });
    }
    next();
};
