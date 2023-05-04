import Post from "../Post/Post";
import styles from './Posts.module.css'
import { usePosts } from "../api";

export default function Posts(){
    const {status, data : posts} = usePosts()
    if(status === "loading"){
        return <div>Loading...</div>
    }   
    return posts.map(post => 
    <div key={post.id} className={styles['post-container']}>
        <Post title={post.title} body={post.body}/>
    </div>)
}