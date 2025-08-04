import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      id: 1,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      id: 2,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      id: 3,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    }
  ]

  return (
    <>
      <div>

        {posts.map((post, index) => (
          <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
          </div>
        ))}

      </div>


      <form action="">
        

      </form>
    </>
  )
}

export default App
