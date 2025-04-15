import express,{Response,Request} from 'express';
import {getPosts,Post,getPostById} from './postsapi';

const app=express();

app.use(express.json())

app.get('/posts',async(req:Request,res:Response<Post[]>)=>{
    try{
        // testing ci / cd
        var posts=await getPosts();
        res.json(posts);
    }
    catch(err){
        res.status(500);
    }
})


app.get('/posts/:id',async(req:Request,res:Response<Post[]>)=>{
    try{
        const id=parseInt(req.params.id);
        var posts=await getPosts();
        console.log(posts)
        var filteredPosts=posts.filter(post=>post.userId===id);
        console.log(filteredPosts)
        res.json(filteredPosts);
    }
    catch(err){
        res.status(500);
    }
})


app.get('/post/:id',async(req:Request,res:Response<Post>)=>{
    try{
        const id=parseInt(req.params.id);
        var post=await getPostById(id);
        res.json(post);
    }
    catch(err){
        res.status(500);
    }
})


app.get('/',(req:Request,res:Response)=>{
    res.send('Welcome to code walkthrough')
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

