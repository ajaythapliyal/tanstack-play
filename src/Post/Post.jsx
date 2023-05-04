import styles from './Post.module.css'

export default function Post({title, body }){
    return <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p>{body}</p>
    </div>
}