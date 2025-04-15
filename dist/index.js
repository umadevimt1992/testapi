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
const express_1 = __importDefault(require("express"));
const postsapi_1 = require("./postsapi");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var posts = yield (0, postsapi_1.getPosts)();
        res.json(posts);
    }
    catch (err) {
        res.status(500);
    }
}));
app.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        var posts = yield (0, postsapi_1.getPosts)();
        console.log(posts);
        var filteredPosts = posts.filter(post => post.userId === id);
        console.log(filteredPosts);
        res.json(filteredPosts);
    }
    catch (err) {
        res.status(500);
    }
}));
app.get('/post/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        var post = yield (0, postsapi_1.getPostById)(id);
        res.json(post);
    }
    catch (err) {
        res.status(500);
    }
}));
app.get('/', (req, res) => {
    res.send('Welcome to code walkthrough');
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
