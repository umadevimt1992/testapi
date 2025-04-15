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
exports.getPostById = exports.getPosts = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    var response = yield (0, axios_1.default)(`${BASE_URL}/Posts`);
    return response.data;
});
exports.getPosts = getPosts;
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var response = yield (0, axios_1.default)(`${BASE_URL}/Posts/${id}`);
    return response.data;
});
exports.getPostById = getPostById;
