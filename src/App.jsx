import { QueryClient, QueryClientProvider } from 'react-query'
import styles from './App.module.css'
import Posts from './Posts/Posts'
import CreatePost from './CreatePost/CreatePost'
import PostSummary from './PostSummary/PostSummary'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className={styles.container}>
      <div style={{marginBottom : 10}}>
      <CreatePost></CreatePost>
      <PostSummary></PostSummary>
      </div>
      <Posts></Posts>
    </div>
    </QueryClientProvider>
  )
}

export default App
