import { useState } from 'react'
import styles from './CreatePost.module.css'
import { useCreatePost } from '../api';
export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const mutation = useCreatePost(() => {
        setTitle('');
        setBody('')
    })
    return <div className={styles.container}>
        <input type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)} value={title}></input>
        <input type="text" placeholder='desc' onChange={(e)=> setBody(e.target.value)} value={body}></input>
        <button onClick={()=> mutation.mutate({id : Date.now(), userId : 5555, title, body})}>Save</button>
    </div>
}