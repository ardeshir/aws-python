import { POSTS_ENDPOINT } from './config.js';

export class PostManager {
    
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // const url = "https://jsonplaceholder.typicode.com/posts";
    
        printPosts() {
            
            this.httpClient.get(POSTS_ENDPOINT).then((posts) => {
                console.log("Posts : ", posts);
            });
            
        } 
}