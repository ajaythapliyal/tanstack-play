import { usePostsCount } from "../api";

export default function PostSummary(){
    const {status, data: totalPosts} = usePostsCount()
    if(status === 'loading'){
        return <div>loading</div>
    }
    return <div >{totalPosts} posts</div>
}