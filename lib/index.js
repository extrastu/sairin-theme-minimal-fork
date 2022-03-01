"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("./Home"));
const Post_1 = __importDefault(require("./Post"));
const Head_1 = __importDefault(require("./Head"));
exports.default = {
    Home: Home_1.default,
    Post: Post_1.default,
    Head: Head_1.default
};
