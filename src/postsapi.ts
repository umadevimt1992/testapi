import axios from "axios";

const BASE_URL='https://jsonplaceholder.typicode.com';


export interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
}

export const getPosts=async():Promise<Post[]>=>{
    var response = await axios<Post[]>(`${BASE_URL}/Posts`)
    return response.data;
}

export const getPostById=async(id:number):Promise<Post>=>{
    var response = await axios<Post>(`${BASE_URL}/Posts/${id}`)
    return response.data;
}