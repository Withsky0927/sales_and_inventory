"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
var server = express_1.default();
var PORT = process.env.PORT || process.env.DEV_PORT;
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(helmet_1.default.xssFilter());
server.use(helmet_1.default.noSniff());
server.use(helmet_1.default.frameguard());
server.use(helmet_1.default.hidePoweredBy());
server.use(helmet_1.default.ieNoOpen());
server.get('/', function (req, res) {
    return res.json({ mgs: 'Hello world' });
});
server.listen(PORT, function () { return console.log("server started at port " + PORT); });
