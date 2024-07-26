import { useEffect, useState } from 'react'
import axios from 'axios';
import PageButtons from './components/pageButtons.jsx'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const limit = 5;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get("http://localhost:3000", {params : {page:page,limit:limit}});
        setPosts(response.data.posts);
        setTotalPosts(response.data.length)
      } catch (error) {
        console.log("Failed to make request", error);
      }
    }
    fetchData();

  }, [page]);

  return (
    <>     
      {posts.map((post) => (
        <div key={post.id} className='post'>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
      <PageButtons
        page={page} 
        setPage={setPage} 
        totalPosts={totalPosts} 
        limit={limit}
      />
    </>
  )
}

export default App
